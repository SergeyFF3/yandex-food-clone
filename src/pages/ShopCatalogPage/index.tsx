import React from 'react';
import styles from "./ShopCatalogPage.module.css";
import ShopDialog from "../ShopPage/ShopDialog";
import Catalog from "../../components/Catalog";

const ShopCatalogPage = () => {
    return (
        <div className='d-flex flex-column'>
            <div className={styles.wrapper}>
                <div className='container d-flex mt-3'>
                    <div className='col-xs-3'>
                        <ShopDialog/>
                        <Catalog/>
                    </div>
                    <div className='col-xs-9'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCatalogPage;