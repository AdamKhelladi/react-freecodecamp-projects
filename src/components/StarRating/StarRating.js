import "./StarRating.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function StarRating({ noOgStars = 6 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    alert(`Hello from ${getCurrentIndex}`);
  }

  function handleMouseEnter(getCurrentIndex) {

  }

  function handleMouseLeave(getCurrentIndex) {

  }

  return (
    <div className="star-rating">
      {[...Array(noOgStars)].map((_, index) => {

        index++;

        return (
          <FaStar
            key={index}
            className="star"
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
          />
        );
      })}
    </div>
  );
}
