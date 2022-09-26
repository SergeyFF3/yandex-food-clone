import React from "react";
import ShopDialog from "./ShopDialog";
import Catalog from "../../components/Catalog";
import ShopSlider from "./ShopSlider";
import ShopFood from "./ShopFood";
import styles from "./ShopPage.module.css";

const shopCatalog = [
  { id: 1, catalogName: "Готовая еда" },
  { id: 1, catalogName: "Фрукты и ягоды" },
  { id: 1, catalogName: "Молоко и яйца" },
];

const ShopPage = () => {
  return (
    <div className="d-flex flex-column">
      <div className={styles.wrapper}>
        <div className="container d-flex mt-3">
          <div className="col-lg-3 px-3">
            <div className="px-3">
              <ShopDialog />
            </div>
            <div>
              {shopCatalog.map((shopCatText) => (
                <Catalog key={shopCatText.id} text={shopCatText.catalogName} />
              ))}
            </div>
          </div>
          <div className="col-lg-9">
            <div>
              <ShopSlider />
            </div>
            <div>
              {shopCatalog.map((shopCat) => (
                <ShopFood key={shopCat.id} data={shopCat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
