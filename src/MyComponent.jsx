import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isEmployee, setisEmployee] = useState(false);
  const [quanlity, setQuantily] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantilyChange(event) {
    setQuantily(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlepaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  const incrementAge = () => {
    setAge(age + 1);
  };
  // Object in state
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChanger(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChanger(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChanger(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  // Array in state
  const [foods, setFoods] = useState(["apple", "banana", "orange"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  const toggleEmployedStatus = () => {
    setisEmployee(!isEmployee);
  };
  // array of objects in state
  const [products, setProducts] = useState([]);
  const [productYear, setProductYear] = useState(new Date().getFullYear());
  const [productMake, setProductMake] = useState("");
  const [productModel, setProductModel] = useState("");

  function handleAddProduct() {
    const newProduct = {
      year: productYear,
      make: productMake,
      model: productModel,
    };
    setProducts((p) => [...p, newProduct]);

    setProductYear(new Date().getFullYear());
    setProductMake("");
    setProductModel("");
  }
  function handleRemoveProduct(index) {
    setProducts(products.filter((_, i) => i !== index));
  }
  function handleYearProductChanger(event) {
    setProductYear(event.target.value);
  }
  function handleMakeProductChanger(event) {
    setProductMake(event.target.value);
  }
  function handleModelProductChanger(event) {
    setProductModel(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name :{name}</p>
      <input value={quanlity} onChange={handleQuantilyChange} type="number" />
      <p>Quantity :{quanlity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <select value={payment} onChange={handlepaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment :{payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Devlivery"
          checked={shipping === "Devlivery"}
          onChange={handleShippingChange}
        />
        Devlivery
      </label>
      <p>Shipping: {shipping}</p>
      <p>Comment :{comment}</p>
      <p>age :{age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>is employee :{isEmployee ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Increment Age</button>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChanger} />
      <br />
      <input type="text=" value={car.make} onChange={handleMakeChanger} />
      <br />
      <input type="text=" value={car.model} onChange={handleModelChanger} />
      <br />
      <h2> List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <h2>List of Product Objects</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} onClick={() => handleRemoveProduct(index)}>
            {product.year} {product.make} {product.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={productYear}
        on
        onChange={handleYearProductChanger}
      />
      <br />
      <input
        type="text"
        value={productMake}
        onChange={handleMakeProductChanger}
        placeholder="Enter product make"
      />
      <br />
      <input
        type="text"
        value={productModel}
        onChange={handleModelProductChanger}
        placeholder="Enter product model"
      />
      <br />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default MyComponent;
