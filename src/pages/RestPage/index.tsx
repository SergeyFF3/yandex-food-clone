import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../../components/ShoppingCart";
import Catalog from "../../components/Catalog";
import RestDialog from "../../components/RestDialog";
import styles from "./RestPage.module.css";
import DeliveryInfo from "../../components/DeliveryInfo";

const restCatalog = [
  { id: 1, catalogName: "Готовая еда" },
  { id: 1, catalogName: "Фрукты и ягоды" },
  { id: 1, catalogName: "Молоко и яйца" },
];

const delInfo = { id: 1, time: "30-45", rating: 4.1, reviews: 44 };

const RestPage = () => {
  const navigate = useNavigate();

  const backRestHandler = () => {
    navigate(-1);
  };
  return (
    <div className={styles.content}>
      <div className="container-fluid">
        <div
          className="d-flex mt-5"
          style={{
            overflow: "auto",
          }}
        >
          <div className="col-lg-3 col-md-3 col-xs-5 col-sm-4 affix">
            <div className="px-3 mb-4">
              <button onClick={backRestHandler}>Все рестораны</button>
            </div>
            <RestDialog />
            <div>
              <div className="px-3">
                <h2>Меню</h2>
              </div>
              {restCatalog.map((restCatText) => (
                <Catalog text={restCatText.catalogName} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-lg-offset-3 col-md-9 col-xs-10">
            <div className="row">
              <div className={styles.header}>
                <div className={styles.img}></div>
                <div className={styles.gradient}></div>
                <h1 className={styles.title}>Rest Name</h1>
                <DeliveryInfo
                  time={delInfo.time}
                  rating={delInfo.rating}
                  reviews={delInfo.reviews}
                />
              </div>
              <h1>Для вас</h1>
              <div className={styles.header}>
                <div className={styles.img}></div>
                <div className={styles.gradient}></div>
                <h1 className={styles.title}>Rest Name</h1>
                <DeliveryInfo
                  time={delInfo.time}
                  rating={delInfo.rating}
                  reviews={delInfo.reviews}
                />
              </div>
              <h1>Для вас</h1>

              <div className={styles.header}>
                <div className={styles.img}></div>
                <div className={styles.gradient}></div>
                <h1 className={styles.title}>Rest Name</h1>
                <DeliveryInfo
                  time={delInfo.time}
                  rating={delInfo.rating}
                  reviews={delInfo.reviews}
                />
              </div>
              <h1>Для вас</h1>
            </div>
          </div>
          <div className={styles.cart}>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestPage;
