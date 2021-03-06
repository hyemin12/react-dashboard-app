import { FaPlus, FaCode, FaGg } from "react-icons/fa";
import { Link } from "react-router-dom";
import { portfolioData } from "../../store/portfolio.state.js";
import "./homePortfolio.css";

function HomePortfolio() {
  return (
    <section className="portfolio-wrapper">
      <h4 className="protfolio-title">PORTFOLIO</h4>
      <div>
        <ul>
          <li>
            <div className="content-img">
              <img
                src={`./img/portfolio/${portfolioData[1].img}.png`}
                alt="moment"
              />
            </div>
            <div className="content-text">
              <p>React 영화 검색사이트</p>
              <div className="link-group">
                <a
                  href={portfolioData[1].code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaCode /> 소스
                </a>
                <a
                  href={portfolioData[1].site}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGg /> 사이트
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="content-img">
              <img
                src={`./img/portfolio/${portfolioData[2].img}.png`}
                alt="moment"
              />
            </div>
            <div className="content-text">
              <p>바닐라JS moment app</p>
              <div className="link-group">
                <a
                  href={portfolioData[2].code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaCode /> 소스
                </a>
                <a
                  href={portfolioData[2].site}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGg /> 사이트
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="btn-more">
              <FaPlus className="icon-more" />
            </div>
            <Link to="/portfolio">
              <div className="content-text">
                <p>더보기</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePortfolio;
