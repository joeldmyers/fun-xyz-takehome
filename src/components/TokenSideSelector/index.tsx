import { Button } from "antd";
import styles from "./tokenSideSelector.module.css";
import { Props, TokenSide } from "./types";

const TokenSideSelector = ({
  selectedTokenSide,
  setSelectedTokenSide,
}: Props) => {
  return (
    <div>
      <Button
        className={styles.sideSelectorButton}
        onClick={() => setSelectedTokenSide(TokenSide.SOURCE)}
        color="default"
        variant={selectedTokenSide === TokenSide.SOURCE ? "solid" : "filled"}
      >
        Source Token
      </Button>
      <Button
        className={styles.priceExplorerButton}
        onClick={() => setSelectedTokenSide(TokenSide.TARGET)}
        color="default"
        variant={selectedTokenSide === TokenSide.TARGET ? "solid" : "filled"}
      >
        Target Token
      </Button>
    </div>
  );
};

export default TokenSideSelector;
