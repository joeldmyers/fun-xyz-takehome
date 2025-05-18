import { Card } from "antd";
import styles from "./errorCard.module.css";

const ErrorCard = () => {
  return (
    <Card className={styles.errorCardContainer}>
      <h3>Something went wrong. Please refresh the page and try again</h3>
    </Card>
  );
};

export default ErrorCard;
