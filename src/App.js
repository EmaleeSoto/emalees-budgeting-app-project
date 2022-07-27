import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New.js";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
