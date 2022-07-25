import React from "react";

export default function Purchase({ purchase, index }) {
  return (
    <div>
      <tr>
        <td>{purchase.date}</td>
        <td>
          <Link to={`/purchases/${index}`}>{purchase.item_name}</Link>
        </td>
        <td>{purchase.amount}</td>
      </tr>
    </div>
  );
}
