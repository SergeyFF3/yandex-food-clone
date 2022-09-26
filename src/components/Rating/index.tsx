import React from "react";

interface IRating {
  rating: number;
  text?: string;
  numRev: number;
  color?: string;
}

const Rating: React.FC<Partial<IRating>> = (props) => {
  const { rating, text, numRev, color } = props;

  return (
    <>
      <span style={{ color: color }} className="mr-1">
        {rating}
      </span>
      <span style={{ color: color }} className="mr-1">
        {text}
      </span>
      <span style={{ color: color }} className="mr-1">
        ({numRev})
      </span>
      <span className="mr-1">₽ </span>
    </>
  );
};

export default Rating;
