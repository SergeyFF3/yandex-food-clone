import React from "react";
import RestCard from "../RestCard";

const restList = [
  {
    id: 1,
    restName: "#FARSH",
    deliveryTime: "60-90",
    rating: 5,
    freeDelivery: true,
    takeaway: true,
    numReviews: 55,
  },
  {
    id: 1,
    restName: "FARSH",
    deliveryTime: "60-90",
    rating: 3.5,
    freeDelivery: true,
    sushi: true,
    numReviews: 55,
  },
  {
    id: 1,
    restName: "FARSH",
    deliveryTime: "60-90",
    rating: 4.5,
    freeDelivery: true,
    burger: true,
    numReviews: 55,
  },
  {
    id: 1,
    restName: "Мясной",
    deliveryTime: "60-90",
    rating: 5,
    freeDelivery: true,
    burger: true,
    numReviews: 55,
    gift: true,
  },
  {
    id: 1,
    restName: "Бургеры",
    deliveryTime: "60-90",
    rating: 5,
    freeDelivery: true,
    burger: true,
    numReviews: 55,
    discount: true,
  },
];

const RestSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="mb-4">Обратите внимание</h2>
        </div>
      </div>
      <div className="row">
        {restList.map((rest) => {
          if (rest.burger) {
            return <RestCard rest={rest} />;
          }
        })}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="mb-4">Все рестораны</h2>
        </div>
      </div>
      <div className="row">
        {restList.map((rest) => (
          <RestCard key={rest.id} rest={rest} />
        ))}
      </div>
    </>
  );
};

export default RestSection;
