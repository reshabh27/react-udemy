import React from 'react'

export const Category = ({ filterData }) => {
  return (
    <div>
      <div className="category">
        <button onClick={() => filterData("All")}>All</button>
        <button onClick={() => filterData("breakfast")}>Breakfast</button>
        <button onClick={() => filterData("lunch")}>Lunch</button>
        <button onClick={() => filterData("shakes")}>Shakes</button>
      </div>
    </div>
  );
};
