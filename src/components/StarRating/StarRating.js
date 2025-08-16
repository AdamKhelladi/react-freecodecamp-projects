import "./StarRating.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function StarRating({ noOfStars = 6 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index++;

        return (
          <FaStar
            key={index}
            size={40}
            className={index <= (hover || rating) ? "active" : "desactive"}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
          />
        );
      })}
    </div>
  );
}
