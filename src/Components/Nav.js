import { Link } from "react-router-dom";
import React from "react";

export default function () {
  return (
    <div className="nav">
      <Link to="/transactions" id="history">
        Transaction History
      </Link>
      <Link to="/transactions/new" id="new">
        New Transaction
      </Link>
    </div>
  );
}
