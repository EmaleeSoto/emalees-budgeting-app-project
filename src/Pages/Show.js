import TransactionDetails from "../Components/TransactionDetails";

export default function Show({ totalFormatter }) {
  return (
    <div>
      <h2>Purchase Details</h2>
      <TransactionDetails totalFormatter={totalFormatter} />
    </div>
  );
}
