import User from "./components/User";
import PortfolioList from "./components/PortfolioList";
import Calendar from "./components/Calendar";
import TodoTemplate from "./components/TodoTemplate";

import Covid from "./components/Covid";
import MusicPlayer from "./components/MusicPlayer";
import MusicPlayer2 from "./components/MusicPlayer2";
import Weather from "./components/Weather";
import Clock from "./components/Clock";

import "./css/app.css";

function App() {
  return (
    <div className="App">
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
            <Clock />
            <MusicPlayer />
            <MusicPlayer2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
