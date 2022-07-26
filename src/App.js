import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
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

//Why can't we use class components instead of hooks? Is that possible?
//Hooks work much better with Router Dom, but Classes can be used here (if you hate yourself)
//why is it that purchases/:index works, but purchases/:id doesn'tm if it's in a string?
//When I set my path on line 15, useParams() expects that I destrcture "index" from useParams()
