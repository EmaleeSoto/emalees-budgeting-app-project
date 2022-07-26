import { Link } from "react-router-dom";
import React from "react";

export default function () {
  return (
    <div>
      <Link to="/transactions">Transaction History</Link>
      <Link to="/transactions/new">New Transaction</Link>
    </div>
  );
}
