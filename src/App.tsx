import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import './styles/index.css'
import './styles/grid.css'
import './styles/utils.css'
import './styles/text.css'
import './styles/flex.css'
import './styles/color.css'
import ShopPage from "./pages/ShopPage";
import AllShopPage from "./pages/AllShopPage";
import RestPage from "./pages/RestPage";
import ShopCatalogPage from "./pages/ShopCatalogPage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import RegistrOrg from './pages/Registration/RegistrOrg';
import LoginOrg from './pages/Login/LoginOrg';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/auth' element={<Login/>}/>
            <Route path='/auth-org' element={<LoginOrg/>}/>
            <Route path="/reg" element={<Registration/>}/>
            <Route path="/reg-org" element={<RegistrOrg/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/shop/:id' element={<ShopPage/>}/>
            <Route path='/shopcatalog' element={<ShopCatalogPage/>}/>
            <Route path='/shopcatalog/:id' element={<ShopCatalogPage/>}/>
            <Route path='/allshops' element={<AllShopPage/>}/>
            <Route path='/restaurant' element={<RestPage/>}/>
            <Route path='/restaurant/:id' element={<RestPage/>}/>
        </Routes>
    );
}

export default App;
