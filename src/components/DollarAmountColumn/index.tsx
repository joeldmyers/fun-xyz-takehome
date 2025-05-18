import { Col, Form, Input } from "antd";
import { Props } from "./types";
import styles from "./dollarAmountColumn.module.css";

const DollarAmountColumn = ({
  dollarAmount,
  handleDollarAmountChange,
}: Props) => {
  return (
    <Col span={8}>
      <Form.Item label="Amount in USD">
        <Input
          className={styles.dollarAmountInput}
          value={dollarAmount}
          onChange={(e) => handleDollarAmountChange(e.target.value)}
          placeholder="$1.00"
        />
      </Form.Item>
    </Col>
  );
};

export default DollarAmountColumn;
