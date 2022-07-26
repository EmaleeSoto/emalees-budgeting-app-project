import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction.js";
import React from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  let total = 0;

  const checkTotal = (total) => {
    if (total >= 1000) {
      return "green";
    } else if (total >= 0) {
      return "yellow";
    }
    return "red";
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div>
      <h3>transaction History</h3>
      <p className={checkTotal(total)}>{`Total: ${total}`}</p>
      <table>
        <tbody>
          {transactions.map((transaction, index) => {
            total += parseInt(transaction.amount);
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
