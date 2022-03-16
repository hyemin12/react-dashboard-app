import { Link } from "react-router-dom";
import {
  FaAngleLeft,
  FaReact,
  FaJsSquare,
  FaPlug,
  FaAlignLeft,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
// components
import RoutePortfolioItem from "../components/portfolio/Route.PortfolioItem";
//css
import "../components/portfolio/routePortfolio.css";

function Portfolio() {
  const state = useSelector((state) => state.portfolioReducer);
  const dispatch = useDispatch();

  function handleFilter(event) {
    const name = event.target.innerText;
    if (name) {
      dispatch({ type: name });
    }
  }
  return (
    <div className="board portfolio">
      <div className="board-wrapper">
        <div className="column">
          <div className="icon-home">
            <Link to="/">
              <FaAngleLeft />
              <span>HOME</span>
            </Link>
          </div>
          <ul className="filter">
            <li className="icon" onClick={handleFilter}>
              <FaAlignLeft />
              <span>All</span>
            </li>
            <li className="icon" onClick={handleFilter}>
              <FaReact />
              <span>React</span>
            </li>
            <li className="icon" onClick={handleFilter}>
              <FaJsSquare />
              <span>Vanilla JS</span>
            </li>
            <li className="icon" onClick={handleFilter}>
              <FaPlug />
              <span>jQuery</span>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="portfolio-list">
            {state &&
              state.map((item, i) => {
                return (
                  <>
                    <RoutePortfolioItem item={item} key={i} />
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
