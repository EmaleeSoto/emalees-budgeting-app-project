import { Link } from "react-router-dom";

export default function FourOFour() {
  return (
    <div>
      <h1>Sorry, no page found!</h1>
      <Link to="/">
        <button id="home-button">Go back to Home</button>
      </Link>
    </div>
  );
}
