import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transaction({ transaction, index }) {
  const navigate = useNavigate();

  const handleDelete = (event) => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => {
        navigate(`/transactions/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.name}</Link>
      </td>
      <td>{`$${transaction.amount}`}</td>
      <td>
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit Transaction</button>
        </Link>
      </td>
      <td>
        <form>
          <button onClick={handleDelete}>Delete Transaction</button>
        </form>
      </td>
    </tr>
  );
}
