import React from "react";
import styles from "./DeliveryInfo.module.css";
import svg from "../../image/info.svg";

interface IInfo {
  time: string;
  rating: number;
  reviews: number;
}

const DeliveryInfo: React.FC<IInfo> = (props) => {
  const { time, rating, reviews } = props;

  return (
    <div className={styles.wrapper}>
      <button className={styles.timeItem}>
        <div className={styles.time}>{time}</div>
        <div>мин</div>
      </button>
      <button className={styles.ratingItem}>
        <div className={styles.rating}>{rating}</div>
        <div className={styles.reviews}>{reviews}</div>
      </button>
      <button className={styles.infoItem}>
        <img src={svg} />
      </button>
    </div>
  );
};

export default DeliveryInfo;
