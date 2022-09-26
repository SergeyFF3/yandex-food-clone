import React from 'react';
import {Link} from 'react-router-dom';
import ShopFoodCard from '../ShopFoodCard';

interface IShopFood {
    data: {
        id: number
        catalogName: string
    }
}

const ShopFood: React.FC<IShopFood> = ({data}) => {
    return (
        <div className='row'>
            <div className='d-flex justify-content-between'>
                <h2>{data.catalogName}</h2>
                <Link to={`/shopcatalog/${data.id}`}>Все</Link>
            </div>
            <div>
                <ShopFoodCard/>
            </div>
        </div>
    );
};

export default ShopFood;