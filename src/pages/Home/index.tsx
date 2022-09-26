import React from "react";
import ShopSection from "../ShopPage/ShopSection";
import RestSection from "../RestPage/RestSection";
import Navbar from "../../components/Navbar";

export const Home = () => {
  return (
    <div className="container-fluid">
      <ShopSection />
      <Navbar />
      <RestSection />
    </div>
  );
};

export default Home;
