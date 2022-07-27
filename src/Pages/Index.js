import Transactions from "../Components/Transactions";

function Index({ totalFormatter }) {
  return (
    <div>
      <h2>Index</h2>
      <Transactions totalFormatter={totalFormatter} />
    </div>
  );
}

export default Index;
