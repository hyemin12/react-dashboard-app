import User from "../components/User";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function Portfolio() {
  return (
    <div className="board">
      <div className="board-wrapper">
        <div className="column">
          <User />
          <ul className="nav-group">
            <li>
              <Link to="/">
                <FaHome />
                HOME
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <div className="filter">
            <ul>
              <li>React</li>
              <li>Vanilla JS</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="portfolio-list">
            <ul>
              <li className="portfolio-item">아이템</li>
              <li className="portfolio-item">아이템</li>
              <li className="portfolio-item">아이템</li>
              <li className="portfolio-item">아이템</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
