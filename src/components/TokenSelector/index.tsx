import { TOKENS } from "@/app/consts";
import { Button } from "antd";
import styles from "./tokenSelector.module.css";
import { Props } from "./types";

const TokenSelector = ({ selectedToken, setSelectedToken }: Props) => {
  return (
    <div>
      {TOKENS.map((t) => (
        <Button
          className={styles.tokenSelectorButton}
          key={t.symbol}
          color="default"
          variant={selectedToken.symbol === t.symbol ? "solid" : "filled"}
          onClick={() => setSelectedToken(t)}
        >
          {t.symbol}
        </Button>
      ))}
    </div>
  );
};

export default TokenSelector;
