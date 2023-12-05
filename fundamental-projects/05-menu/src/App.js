import React, { useState } from "react";
import "./App.css";
import menu from "./components/data";
import { Title } from "./components/Title";
import { Menu } from "./components/Menu";
import { Category } from "./components/Category";

function App() {
  const [data, setdata] = useState(menu);

  const filterData = (cat) =>{
    if(cat === 'All')
    {
      setdata(menu);
      return;
    }
    let newData = menu.filter(food => food.category === cat);
    setdata(newData);
  }

  return (
    <div className="App">
      <Title />
      <Category filterData={filterData} />
      <Menu {...data} />
    </div>
  );
}

export default App;
