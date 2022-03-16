import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import PortfolioModal from "./components/portfolio/PortfolioModal";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/portfolio/:id" element={<PortfolioModal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
