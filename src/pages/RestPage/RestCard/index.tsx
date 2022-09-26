import React from "react";
import { IRestProps } from "../../../models/IRestProps";
import { useNavigate } from "react-router-dom";
import styles from "./RestCard.module.css";
import Rating from "../../../components/Rating";
import Discount from "../../../components/Discount";

interface IRestCardProps {
  rest: IRestProps;
}

const RestCard: React.FC<IRestCardProps> = ({ rest }) => {
  const navigate = useNavigate();

  const navRestHandler = () => {
    navigate(`/restaurant/${rest.id}`);
  };

  const rating = (
    rating: number,
    numRev: number,
    color: string = "rgb(158, 155, 152)"
  ) => {
    if (rating >= 4.8) {
      return <Rating text="Отлично" rating={rating} numRev={numRev} />;
    } else if (rating < 4.8 && rating >= 4.6) {
      return <Rating rating={rating} text="Хорошо" numRev={numRev} />;
    } else {
      return <Rating rating={rating} numRev={numRev} color={color} />;
    }
  };

  return (
    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 mt-3">
      <div className={styles.card} onClick={navRestHandler}>
        <div className={styles.abs}>Бесплатная доставка</div>
        <div className={styles.time}>{rest.deliveryTime} мин</div>
      </div>
      <div className={styles.restName}>{rest.restName}</div>
      <div className="mb-2">{rating(rest.rating, rest.numReviews)}</div>
      <div className={styles.discount}>
        {rest.discount && (
          <Discount discount={rest.discount} text="Скидка 10%" />
        )}
      </div>
      <div className={styles.gift}>
        {rest.gift && <Discount gift={rest.gift} text="Блюдо в подарок" />}
      </div>
    </div>
  );
};

export default RestCard;
