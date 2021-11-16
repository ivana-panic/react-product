import { useState } from "react";

export const Product = (props) => {
  const [count, setCount] = useState(0);
  const counter = (value, action, amount = 1) => {
    switch (action) {
      case "add":
        setCount(value + amount);
        break;
      case "substract":
        setCount(value - amount);
        break;
    }
  };

  return (
    <div className="wrapp">
      <div className="nameProd">{props.name}</div>

      <div className="authorProd">-{props.author}-</div>
      <div class="image">
        <img src={props.image}></img>
      </div>
      <div className="descriptionProd">{props.desc}</div>
      <br></br>
      <div className="priceProd">Price: {props.price}</div>
      <br></br>
      <div className="countWrapp">
        <div className="flex-container">
          <div
            onClick={() => {
              counter(count, "add");
            }}
          >
            <div className="addProd">+</div>
          </div>
          <div className="countProd">{count}</div>
          <div
            onClick={() => {
              counter(count, "substract");
            }}
          >
            <div className="substrProd">-</div>
          </div>
        </div>
      </div>
      <button type="button" className="buttonProd">
        <p className="addCartText">Add in cart</p>
      </button>
    </div>
  );
};
