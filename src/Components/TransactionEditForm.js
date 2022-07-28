import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function TransactionEditForm() {
  const navigate = useNavigate();
  const { index } = useParams();
  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [index]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Transaction Name</label>
        <input
          type="text"
          id="name"
          onChange={handleTextChange}
          value={transaction.name}
        />
        <br></br>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={handleTextChange}
          value={transaction.amount}
        />
        <br></br>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          onChange={handleTextChange}
          value={transaction.date}
        />
        <br></br>
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          onChange={handleTextChange}
          value={transaction.from}
        />
        <br></br>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          onChange={handleTextChange}
          value={transaction.category}
        />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}
