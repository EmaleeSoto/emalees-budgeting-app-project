import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id.toLowerCase()]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="date">Date</label>
        <input type="text" id="date" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="from">From</label>
        <input type="text" id="from" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" onChange={handleTextChange} />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}
