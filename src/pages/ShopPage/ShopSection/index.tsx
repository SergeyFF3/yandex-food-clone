import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../ShopCard";
import styles from "./ShopSection.module.css";
import { ApiShops } from "../../../api/shop";

const ShopSection = () => {
  const navigate = useNavigate();

  const allShopClickHandler = () => {
    navigate("/allshops");
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="mt-4">
            <div className={styles.shopRow}>
              <h1 className={styles.title}>Магазины</h1>
              <div>
                <button className={styles.btn} onClick={allShopClickHandler}>
                  Все
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {ApiShops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </>
  );
};

export default ShopSection;
