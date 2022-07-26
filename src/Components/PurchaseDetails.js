import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function PurchaseDetails() {
  const [purchase, setPurchase] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/purchases/${index}`)
      .then((response) => {
        setPurchase(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {};

  return (
    <div>
      <h4>{`"${purchase.name}" Charge --- Type: ${purchase.category}`}</h4>
      <p>{`Amount Paid: ${purchase.amount}`}</p>
      <p>{`Charged by "${purchase.from}" on ${purchase.date}`}</p>
      <button
        onClick={handleDelete}
      >{`Delete ${purchase.name} from History`}</button>
    </div>
  );
}
