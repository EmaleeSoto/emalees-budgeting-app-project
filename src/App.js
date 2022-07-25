import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import New from "./Pages/New.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="purchases/newpurchase" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
