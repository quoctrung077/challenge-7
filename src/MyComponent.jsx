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

  const toggleEmployedStatus = () => {
    setisEmployee(!isEmployee);
  };
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
    </div>
  );
}

export default MyComponent;
