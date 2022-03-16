import React, { useState } from "react";

function Item({ name, category }) {
  const [toggle, setToggle] = useState(true)

  function handleClick () {
    setToggle(toggle => !toggle)
    console.log(toggle)
  }
  const classApp = toggle ? "" : "in-cart"
  const buttonText = toggle ? "Add to Cart" : "Remove from Cart"
  return (
    <li className={classApp}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
