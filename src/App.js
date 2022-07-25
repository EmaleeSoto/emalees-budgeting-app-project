import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";
import New from "./Pages/New.js";
import Show from "./Pages/Show";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/purchases" element={<Index />} />
          <Route path="/purchases/:index" element={<Show />} />
          <Route path="/purchases/newpurchase" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//Why can't we use class components instead of hooks? Is that possible?
//why is it that purchases/:index works, but purchases/:id doesn'tm if it's in a string?
