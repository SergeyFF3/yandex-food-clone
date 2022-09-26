import React from "react";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Корзина</h2>
      </div>
      <div className="d-flex align-items-center h-100 ">
        <h2 className="text-center">В вашей корзине пусто</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
