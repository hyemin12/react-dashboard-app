import { FaCode, FaEdge, FaAngleLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../store/portfolio.state";
import "./portfoliomodal.css";
function PortfolioModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = portfolioData.findIndex((element) => element.id === id);
  const item = portfolioData[index];
  return (
    <>
      <div className="board portfolio">
        <div className="board-wrapper">
          <div className="modal-wrapper">
            <div className="column">
              <h1 className="back" onClick={() => navigate("/portfolio")}>
                <FaAngleLeft />
                My Portfolio
              </h1>
              <img src={`../img/${item.img}.png`} alt={item.title}></img>
            </div>
            <div className="column text-column">
              <h1>{item.title}</h1>
              <p>{item.describtion}</p>
              <div className="skills-wrapper">
                <h4>기능</h4>
                {item.skills.map((skill) => {
                  return <p key={skill}>- {skill}</p>;
                })}
              </div>

              <div className="link-group">
                <a href={item.code} target="_blank" rel="noreferrer">
                  <FaCode />
                  <span>소스 보기</span>
                </a>
                <a href={item.site} target="_blank" rel="noreferrer">
                  <FaEdge />
                  <span>사이트 바로가기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioModal;
