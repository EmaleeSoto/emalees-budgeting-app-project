// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// const API = process.env.REACT_APP_API_URL;

// export default function Total() {
//   const [total, setTotal] = useState(0);

//   //   const updateTotal = useCallback(() => {
//   //     return total += 2;
//   //   }, []); //logResult is memoized now.
//   //   useEffect(()=> {
//   //     setCount((count)=> count+1);
//   //   },[logResult]);

//   useEffect(() => {
//     axios
//       .get(`${API}/transactions`)
//       .then((res) => {
//         const transactions = res.data;
//         transactions.map((transaction) => {
//           setTotal(total + parseInt(transaction.amount));
//         });
//       })
//       .catch(
//         (err) => {
//           console.warn(err);
//         },
//         [updateTotal]
//       );
//   });

//   //   const handleTotalChange = (total) => {
//   //     axios
//   //       .get(`${API}/logs/`)
//   //       .then((res) => {
//   //         const transactions = res.data;
//   //         transactions.map((transaction) => {
//   //           setTotal(total + transaction.amount);
//   //         });
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });

//   return <p>{`Total: ${total}`}</p>;
// }
