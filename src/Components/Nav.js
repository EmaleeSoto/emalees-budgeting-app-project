import { Link } from "react-router-dom";
import React from "react";

export default function () {
  return (
    <div>
      <Link to="/purchases">Purchase History</Link>
      <Link to="/purchases/newpurchase">New Transaction</Link>
    </div>
  );
}
