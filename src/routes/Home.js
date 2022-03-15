import User from "../components/User";
import PortfolioList from "../components/PortfolioList";
import Calendar from "../components/Calendar";
import TodoTemplate from "../components/TodoTemplate";

import Covid from "../components/Covid";
import MusicPlayer2 from "../components/MusicPlayer2";
import Weather from "../components/Weather";
import Clock from "../components/Clock";

function Home() {
  return (
    <div className="board">
      <div className="board-wrapper">
        <div className="column">
          <User />
          <PortfolioList />
          <Calendar />
        </div>
        <div className="column">
          <TodoTemplate />
        </div>
        <div className="column">
          <div className="row">
            <Covid />
            <Weather />
          </div>
          <MusicPlayer2 />
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default Home;
