import { useState, useEffect } from "react";
import axios from "axios";
import Purchase from "./Purchase";
import React from "react";

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${API}/purchases`)
      .then((response) => {
        setPurchases(response.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  let total = 0;

  return (
    <div>
      <h3>Purchase History</h3>
      <table>
        <tbody>
          {purchases.map((purchase, index) => {
            total += parseInt(purchase.amount);
            return <Purchase key={index} purchase={purchase} index={index} />;
          })}
        </tbody>
      </table>
      <p>{`Total: ${total}`}</p>
    </div>
  );
}
