import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction.js";
import React from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  const checkTotal = (total) => {
    if (total >= 1000) {
      return "green";
    } else if (total >= 0) {
      return "yellow";
    }
    return "red";
  };

  let total = 0;

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

  const totalFormatter = (total) => {
    return total >= 0 ? `$${total}` : `-$${Math.abs(total)}`;
  };
  return (
    <div>
      <h3>Transaction History</h3>

      <table className="table">
        <tbody>
          {transactions.map((transaction, index) => {
            total += parseInt(transaction.amount);
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
                totalFormatter={totalFormatter}
              />
            );
          })}
        </tbody>
      </table>
      <h2 className={checkTotal(total)}>{`Current Balance: ${totalFormatter(
        total
      )}`}</h2>
    </div>
  );
}
