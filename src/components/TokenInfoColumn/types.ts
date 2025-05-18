import { Token } from "@/app/types";
import { GetAssetPriceInfoResponse } from "@funkit/api-base";

export interface Props {
  selectedTokenSide: string;
  selectedToken: Token;
  assetPriceInfo: GetAssetPriceInfoResponse;
  dollarAmount: string;
}
