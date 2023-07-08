import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { ResturantDetail } from "./Component/ResturantDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:resturantId" element={<ResturantDetail />} />
      </Routes>
    </div>
  );
}

export default App;
