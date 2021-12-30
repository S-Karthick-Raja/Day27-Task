import { useState } from "react";

export function StarRating() {
   // to change color onclick
   const [rating, setRating] = useState(null);

   // to change color on hovering
   const [hover, setHover] = useState(null);
  return (
    <div >
      {/* looping the star button */}
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              className="starConatiner"
              value={ratingValue}
              // to change color onclick
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{
                // conditional styling for the change of color
                color: ratingValue <= (hover || rating) ? "#ffeb3b" : "black",
              }}
              // to change color on hovering
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
}
