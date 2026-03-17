import {
  type Quote,
  SwapType,
} from "@hot-pot/hotpot-sdk-ts";
import Decimal from "decimal.js";

import { Token } from "../types";
import { hotpotApiClient } from "./api";
import { networksService } from "./networks";
import { needsWrapping } from "./wrapNative";

export type SwapQuote = Quote;

export class QuoteService {
  async getQuote(
    fromToken: Token,
    toToken: Token,
    amount: string,
    slippage: number = 0.5
  ): Promise<SwapQuote | null> {
    if (!amount || parseFloat(amount) <= 0) {
      return null;
    }

    const sourceTokenAddr = needsWrapping(fromToken) && fromToken.wrapped_token_address
      ? fromToken.wrapped_token_address
      : fromToken.address;

    if (!sourceTokenAddr || !toToken.address) {
      return this.getMockQuote(fromToken, toToken, amount);
    }

    try {
      const networks = await networksService.getNetworks();
      const sourceChainId = networksService.getNetworkIdByName(
        networks,
        fromToken.network
      );
      const destChainId = networksService.getNetworkIdByName(
        networks,
        toToken.network
      );

      if (!sourceChainId || !destChainId) {
        console.warn("Could not resolve network IDs, using mock quote");
        return this.getMockQuote(fromToken, toToken, amount);
      }

      const amountNum = parseFloat(amount);
      const slippageBps = BigInt(Math.round(slippage * 100));

      const quote = await hotpotApiClient.getQuote(
        sourceChainId,
        sourceTokenAddr,
        destChainId,
        toToken.address,
        amountNum,
        slippageBps,
        SwapType.Standard,
        null,
        "escrowed"
      );

      return quote;
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      return this.getMockQuote(fromToken, toToken, amount);
    }
  }

  private getMockQuote(
    fromToken: Token,
    toToken: Token,
    amount: string
  ): SwapQuote {
    const fromFiatValue = parseFloat(amount) * (fromToken.fiatRate || 1);
    const toAmount = fromFiatValue / (toToken.fiatRate || 1);
    const toAmountAfterFee = toAmount * 0.997;

    const amountDecimal = new Decimal(amount);
    const toAmountDecimal = new Decimal(toAmountAfterFee);
    const srcLots = amountDecimal
      .times(Math.pow(10, fromToken.decimals))
      .toFixed(0);
    const destLots = toAmountDecimal
      .times(Math.pow(10, toToken.decimals))
      .toFixed(0);

    const mockSourceAddr = needsWrapping(fromToken) && fromToken.wrapped_token_address
      ? fromToken.wrapped_token_address
      : fromToken.address || "";
    return {
      id: "mock-quote-id",
      resolver_id: "",
      source_chain: 0,
      source_token: mockSourceAddr,
      dest_chain: 0,
      dest_token: toToken.address || "",
      intermediate_token: null,
      intermediate_token_amount_min: null,
      intermediate_token_amount_max: null,
      intermediate_token_decimals: null,
      source_amount_lots: srcLots,
      source_amount_decimals: fromToken.decimals,
      min_dest_amount_lots: destLots,
      max_dest_amount_lots: destLots,
      dest_amount_decimals: toToken.decimals,
      slippage_bps: "50",
      expiry: Math.floor(Date.now() / 1000) + 30,
      swap_type: SwapType.Standard,
      deposit_type: "escrowed",
    };
  }

  calculateOutputAmount(quote: SwapQuote): string {
    const amount = new Decimal(quote.max_dest_amount_lots).dividedBy(
      Math.pow(10, quote.dest_amount_decimals)
    );
    return amount.toFixed(6);
  }
}

export const quoteService = new QuoteService();
