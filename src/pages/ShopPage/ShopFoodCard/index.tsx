import React from "react";
import styles from "./ShopFoodCard.module.css";
import Dialog from "../../../components/Dialog";

const ShopFoodCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        buttonsComponent={<button>1233</button>}
      >
        <div>
          <div
            className="d-flex justify-content-between"
            style={{
              borderRadius: "0 0 30px 30px",
              padding: "0 10px 30px 10px",
              position: "relative",
              zIndex: "10",
              top: "20px",
            }}
          >
            <div className={styles.dialogItem}>
              <div className={styles.dialogImg}></div>
            </div>
            <div className="d-flex align-items-center col-lg-12 ">
              <div>
                <div>
                  <h2>Томаты черри</h2>
                  <p>250 г</p>
                </div>
                <div className="d-flex">
                  <p>219₽</p>
                  <button>Добавить</button>
                  <button>Оформить заказ</button>
                </div>
                <div>
                  <p>Подборка с похожимы заказами</p>
                </div>
              </div>
            </div>
            <div style={{ cursor: "pointer" }} onClick={handleClose}>
              x
            </div>
          </div>
          <div className={styles.dialogBot}>
            <h2>Что-нибудь еще?</h2>
          </div>
        </div>
        {/*<button onClick={handleClose}>123</button>*/}
      </Dialog>
      <div className={styles.wrapper} onClick={handleClickOpen}>
        <div className={styles.img}></div>
        <div>185₽</div>
        <div>Борщ с говядиной</div>
        <div>390 г</div>
        <button>+</button>
      </div>
    </div>
  );
};

export default ShopFoodCard;
