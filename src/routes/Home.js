import User from "../components/user/User";
import HomePortfolio from "../components/portfolio/Home.Portfolio";
import Calendar from "../components/calendar/Calendar";
import TodoTemplate from "../components/todo/TodoTemplate";
import Covid from "../components/covid/Covid";
import MusicPlayer2 from "../components/musicplayer/MusicPlayer2";
import Weather from "../components/weather/Weather";
import Clock from "../components/clock/Clock";
import Quote from "../components/quote/Quote";

function Home() {
  return (
    <div className="board">
      <div className="board-wrapper">
        <div className="column">
          <User />
          <HomePortfolio />
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
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default Home;
