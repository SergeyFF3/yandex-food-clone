import React from "react";
import Dialog from "../Dialog";

const RestDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        test
      </Dialog>
      <div className="px-3" onClick={handleClickOpen}>
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

export default RestDialog;
