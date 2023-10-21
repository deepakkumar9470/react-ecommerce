import React from "react";
import { Star } from "lucide-react";

const Rating = () => {
  return (
    <div className="flex gap-1 items-center">
      <Star color="green" />
      <Star color="green" />
      <Star color="green" />
      <Star color="green" />
      <Star color="green" />
      <span className="text-small font-semibold">(12)</span>
    </div>
  );
};

export default Rating;
