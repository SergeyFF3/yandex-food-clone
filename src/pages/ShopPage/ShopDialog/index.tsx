import React from "react";
import Dialog from "../../../components/Dialog";
import Button from "@mui/material/Button";
import styles from "../ShopPage.module.css";

const ShopDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        buttonsComponent={
          <>
            <Button>1</Button>
            <Button>2</Button>
          </>
        }
      >
        <div>qwrwqrq</div>
      </Dialog>
      <div className={styles.dialog} onClick={handleClickOpen}>
        <h3>Доставка</h3>
        <div>30 мин</div>
        <div>
          Первый заказ <br /> бесплатно от 1  000 ₽
        </div>
        <div style={{ color: "#DB6161" }}>О доставке</div>
      </div>
    </>
  );
};

export default ShopDialog;
