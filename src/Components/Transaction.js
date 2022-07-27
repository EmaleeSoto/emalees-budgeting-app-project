import { Link } from "react-router-dom";
import React from "react";

export default function Transaction({ transaction, index, totalFormatter }) {
  return (
    <tr>
      <td className="table-info">{transaction.date}</td>
      <td className="table-info" id="transaction-name">
        <Link to={`/transactions/${index}`}>{transaction.name}</Link>
      </td>
      <td className="table-info">
        <p id={Math.sign(transaction.amount) >= 0 ? "positive" : "negative"}>
          {totalFormatter(transaction.amount)}{" "}
        </p>
      </td>
    </tr>
  );
}
