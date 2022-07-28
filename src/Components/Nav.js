import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img
          src="https://www.vhv.rs/dpng/d/411-4112576_coffee-cup-png-steaming-cup-of-coffee-clipart.png"
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
