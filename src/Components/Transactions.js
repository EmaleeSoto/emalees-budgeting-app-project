import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Transaction from "./Transaction.js";
import React from "react";

export default function Transactions({ totalFormatter }) {
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

  //Found on StackOverFlow, a solution to format monetary values as American USD
  const balanceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalBalance = (totalTransactions) => {
    let total = 0;
    totalTransactions.map((transaction) => {
      total += parseInt(transaction.amount);
    });
    return total;
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

  const clearHistory = (transactions) => {
    for (let i = 0; i < transactions.length; i++) {
      console.log(i);
      console.log(transactions.length);
      axios
        .delete(`${API}/transactions/0`)
        .then(() => {})
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  return (
    <div>
      <h2
        className={checkTotal(totalBalance(transactions))}
      >{`Your Current Balance: ${balanceFormatter.format(
        totalBalance(transactions)
      )}`}</h2>
      <table className="table">
        <tbody>
          {transactions.map((transaction, index) => {
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
      {/* <button
        className={
          transactions.length > 0 ? "clear-history-button" : "none-display"
        }
        onClick={() => clearHistory(transactions)}
      >
        Clear History
      </button> */}

      <form onSubmit={() => clearHistory(transactions)}>
        <input type="submit" value="Clear History" />
      </form>
    </div>
  );
}
