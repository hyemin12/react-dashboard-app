import { Link } from "react-router-dom";
function RoutePortfolioItem(props) {
  const item = props.item;
  return (
    <>
      <li className="portfolio-item">
        <img src={`./img/portfolio/${item.img}.png`} alt={item.title} />
        <div className="item-hover">
          <h4>{item.title}</h4>
          <div className="link-group">
            <Link to={`/portfolio/${item.id}`}>
              <button>상세보기</button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default RoutePortfolioItem;
