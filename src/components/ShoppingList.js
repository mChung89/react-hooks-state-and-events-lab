import { waitForDomChange } from "@testing-library/react";
import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All")

  function handleChange(e) {
    setFilterBy(() => e.target.value)
  }
  
  const filteredList = items.filter(item => filterBy === "All" ? true : item.category === filterBy
)

  const itemList = filteredList.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
    ))
    
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
