import React from "react";
import styles from "./Discount.module.css";

interface IDiscount {
  discount?: boolean;
  gift?: boolean;
  text: string;
}

const Discount: React.FC<IDiscount> = (props) => {
  const { discount, gift, text } = props;

  return (
    <div className={styles.wrapper}>
      {discount && (
        <div className={styles.abs}>
          <img
            className={styles.img}
            src="https://avatars.mds.yandex.net/get-bunker/118781/e7d4e26a917ef54286bb6bf5788e0aa151dcb756/orig"
          />
        </div>
      )}
      {gift && (
        <div className={styles.abs}>
          <img
            className={styles.img}
            src="https://avatars.mds.yandex.net/get-bunker/118781/e7d4e26a917ef54286bb6bf5788e0aa151dcb756/orig"
          />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Discount;
