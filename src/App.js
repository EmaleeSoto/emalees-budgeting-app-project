import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New.js";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import "./App.css";

function App() {
  const totalFormatter = (total) => {
    return total >= 0 ? `$${total}` : `-$${Math.abs(total)}`;
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/transactions"
            element={<Index totalFormatter={totalFormatter} />}
          />
          <Route
            path="/transactions?"
            element={<Index totalFormatter={totalFormatter} />}
          />
          <Route
            path="/transactions/:index"
            element={<Show totalFormatter={totalFormatter} />}
          />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
