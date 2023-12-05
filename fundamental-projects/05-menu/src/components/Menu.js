import React from 'react'
import { MenuItem } from './MenuItem'

export const Menu = (data) => {
    console.log(data);
  return (
    <div className='grid-container'>
      {Object.keys(data).map((food) => {
        return <MenuItem key={food.id} food={data[food]} />;
      })}
    </div>
  );
}
