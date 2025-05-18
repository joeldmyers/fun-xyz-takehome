"use client";

import "@ant-design/v5-patch-for-react-19";
import { Card, Row } from "antd";
import styles from "./page.module.css";
import { useState } from "react";
import { TOKENS } from "./consts";
import { useGetAssetPrice } from "@/hooks/useGetAssetPrice";
import { Token } from "./types";
import { formatDollarAmount } from "./utils";
import LoadingCard from "@/components/LoadingCard";
import ErrorCard from "@/components/ErrorCard";
import TokenSideSelector from "@/components/TokenSideSelector";
import { TokenSide } from "@/components/TokenSideSelector/types";
import TokenSelector from "@/components/TokenSelector";
import TokenInfoColumn from "@/components/TokenInfoColumn";
import DollarAmountColumn from "@/components/DollarAmountColumn";

export default function Home() {
  const [selectedTokenSide, setSelectedTokenSide] = useState<TokenSide>(
    TokenSide.SOURCE
  );
  const [selectedSourceToken, setSelectedSourceToken] = useState<Token>(
    TOKENS[0]
  );

  const [selectedTargetToken, setSelectedTargetToken] = useState<Token>(
    TOKENS[1]
  );

  const [dollarAmount, setDollarAmount] = useState<string>("$100");

  const { data: sourcePriceInfo, status: sourcePriceStatus } =
    useGetAssetPrice(selectedSourceToken);

  const { data: targetPriceInfo, status: targetPriceStatus } =
    useGetAssetPrice(selectedTargetToken);

  const handleDollarAmountChange = (val: string) => {
    const formattedValue = formatDollarAmount(val);
    if (formattedValue) {
      setDollarAmount(formattedValue);
    }
  };

  if (sourcePriceStatus === "pending" || targetPriceStatus === "pending") {
    return <LoadingCard />;
  }

  if (sourcePriceStatus === "error" || targetPriceStatus === "error") {
    return <ErrorCard />;
  }

  return (
    <Card className={styles.priceExplorerContainer}>
      <h1 className={styles.priceExplorerHeader}>Token Price Explorer</h1>

      <TokenSideSelector
        selectedTokenSide={selectedTokenSide}
        setSelectedTokenSide={setSelectedTokenSide}
      />
      <TokenSelector
        selectedToken={
          selectedTokenSide === TokenSide.SOURCE
            ? selectedSourceToken
            : selectedTargetToken
        }
        setSelectedToken={
          selectedTokenSide === TokenSide.SOURCE
            ? setSelectedSourceToken
            : setSelectedTargetToken
        }
      />
      <Row>
        <TokenInfoColumn
          dollarAmount={dollarAmount}
          selectedTokenSide={TokenSide.SOURCE}
          selectedToken={selectedSourceToken}
          assetPriceInfo={sourcePriceInfo}
        />
        <DollarAmountColumn
          handleDollarAmountChange={handleDollarAmountChange}
          dollarAmount={dollarAmount}
        />
        <TokenInfoColumn
          dollarAmount={dollarAmount}
          selectedTokenSide={TokenSide.TARGET}
          selectedToken={selectedTargetToken}
          assetPriceInfo={targetPriceInfo}
        />
      </Row>
    </Card>
  );
}
