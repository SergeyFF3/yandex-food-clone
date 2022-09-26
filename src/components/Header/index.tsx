import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useRootData } from "../../utils/hooks/store";
import { ReactComponent as UserIcon } from "../../image/userM.svg";
import { observer } from "mobx-react";
import Popover from "../Popover";
import Dialog from "../Dialog";
import Geolocation from "../Geolocation";

const Header = observer(() => {
  const { isAuth, email } = useRootData((store) => store.authStore);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.fixed}>
      <header className="container-fluid ">
        <div className={styles.content}>
          <div className="d-flex ">
            <Link to="/">
              <div className={styles.logo}>Foody</div>
            </Link>
            <Dialog open={open} onClose={handleClick}>
              <div className="p-3 ">
                <Geolocation />
              </div>
            </Dialog>
            <Popover buttonText="Укажите адрес доставки" showOnLoad>
              <h2>Уточните адрес доставки</h2> Сейчас вы видите магазины и
              рестораны в Москве
              <div>
                <button onClick={handleClick}>Выбрать улицу и дом</button>
              </div>
            </Popover>
          </div>
          <div>
            {isAuth ? (
              <div className="d-flex align-items-center">
                <UserIcon width="25" height="25" />
                <div className="ml-2">{email}</div>
              </div>
            ) : (
              <Link to="/auth">
                <button className={styles.btn}>Войти</button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
});

export default Header;
