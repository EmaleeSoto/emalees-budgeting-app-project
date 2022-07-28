import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transaction({ transaction, index, totalFormatter }) {
  const navigate = useNavigate();

  const handleDelete = (event) => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <tr>
      <Link to={`/transactions/${index}/edit`}>
        <button className="edit-button">Edit Transaction</button>
      </Link>
      <td className="table-info">{transaction.date}</td>
      <td className="table-info" id="transaction-name">
        <Link to={`/transactions/${index}`}>{transaction.name}</Link>
      </td>
      <td className="table-info">
        <p id={Math.sign(transaction.amount) >= 0 ? "positive" : "negative"}>
          {totalFormatter(transaction.amount)}{" "}
        </p>
      </td>
      <td>
        <button className="delete-button" onClick={handleDelete}>
          Delete Transaction
        </button>
      </td>
    </tr>
  );
}
