import React from "react";
import { IShopProps } from "../../../models/IShopProps";
import styles from "../ShopSection/ShopSection.module.css";
import { useNavigate } from "react-router-dom";

type IShopCardProps = {
  shop: IShopProps;
};

const ShopCard: React.FC<IShopCardProps> = ({ shop }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/shop/${shop.id}`);
  };
  return (
    <div className="col-lg-4 col-md-6 col-xs-12 mb-3 mt-3">
      <div
        className={styles.card}
        style={{ background: shop.background }}
        onClick={navigateHandler}
      >
        <div className={styles.shopName}>{shop.storeName}</div>
        <div className={styles.time}>{shop.deliveryTime} мин</div>
      </div>
    </div>
  );
};

export default ShopCard;
