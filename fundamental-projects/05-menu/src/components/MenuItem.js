import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";


export const MenuItem = ({ food }) => {
  // console.log(food);
  return (
    <div className="grid-item">
      <img
        src={food.img}
        alt="food"
        style={{ height: "150px", width: "230px" }}
      />
      <div>
        <div className="foodTitles">
          <b>{food.title}</b>
          <p>$ {food.price}</p>
        </div>
        <p>{food.desc}</p>

        <div>
          <button>
          <GoChevronUp />
          </button>
          {food.likes ? food.likes : 0} likes
          <button>
          <GoChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};
