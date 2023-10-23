import React from "react";
import { Star,StarHalf } from "lucide-react";

const Rating = ({ rating,count }) => {
  const starIcons = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<Star key={i} />);
  }

  if (hasHalfStar) {
    starIcons.push(<StarHalf  key={fullStars} />);
  }

  return (
    <div className="flex gap-1 items-center">
       {starIcons.map((icon, index) => (
        <span className="text-orange text-base" key={index}>{icon}</span>
      ))}
      <span className="text-small font-semibold text-softTxt">{count}</span>
    </div>
  );
};

export default Rating;
