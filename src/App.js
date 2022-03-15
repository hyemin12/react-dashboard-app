import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import { Route, Routes } from "react-router-dom";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
