import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function () {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <label htmlFor="date">Date</label>
        <input type="text" id="date" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" />
        <label htmlFor="from">From</label>
        <input type="text" id="from" />
        <input type="submit"></input>
      </form>
    </div>
  );
}
