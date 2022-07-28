import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img
          id="nav-image"
          src="https://www.pngall.com/wp-content/uploads/4/Running-Transparent-Image.png"
          alt="piggy"
        />
      </Link>
      <Link to="/transactions" id="history">
        Transaction History
      </Link>
      <Link to="/transactions/new" id="new">
        New Transaction
      </Link>
    </div>
  );
}
