import { Card, Spin } from "antd";
import styles from "./loadingCard.module.css";

const LoadingCard = () => {
  return (
    <Card className={styles.loadingCardContainer}>
      <h3>Loading...</h3>
      <Spin className={styles.loader} />
    </Card>
  );
};

export default LoadingCard;
