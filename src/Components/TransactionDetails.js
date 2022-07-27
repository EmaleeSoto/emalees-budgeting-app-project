import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails({ totalFormatter }) {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <h4>{`Transaction for "${transaction.name}" -- ${transaction.category}`}</h4>
      <p>{`Amount Paid: ${totalFormatter(transaction.amount)}`}</p>
      <p>{`Charged by "${transaction.from}" on ${transaction.date}`}</p>
      <Link to={`/transactions/${index}/edit`}>
        <button className="edit-button">{`Edit ${transaction.name}`}</button>
      </Link>
      <button
        className="delete-button"
        onClick={handleDelete}
      >{`Delete ${transaction.name} from History`}</button>
    </div>
  );
}
