import { Col } from "antd";
import { Props } from "./types";
import { calculateAmount } from "@/app/utils";

const TokenInfoColumn = ({
  selectedTokenSide,
  selectedToken,
  assetPriceInfo,
  dollarAmount,
}: Props) => {
  return (
    <Col span={8}>
      <h2>{selectedTokenSide} Token</h2>
      <h3>{selectedToken.symbol}</h3>
      <p>
        {assetPriceInfo?.unitPrice &&
          dollarAmount &&
          `Amount: ${calculateAmount(assetPriceInfo?.unitPrice, dollarAmount)}`}
      </p>
    </Col>
  );
};

export default TokenInfoColumn;
