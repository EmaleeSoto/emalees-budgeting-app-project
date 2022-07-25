import { Link } from "react-router-dom";
import React from "react";

export default function Purchase({ purchase, index }) {
  return (
    <tr>
      <td>{purchase.date}</td>
      <td>
        <Link to={`/purchases/${index}`}>{purchase.item_name}</Link>
      </td>
      <td>{purchase.amount}</td>
    </tr>
  );
}
