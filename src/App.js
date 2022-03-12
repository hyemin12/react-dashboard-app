import User from "./components/User";
import PortfolioList from "./components/PortfolioList";
import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";
import Covid from "./components/Covid";
import MusicPlayer from "./components/MusicPlayer";
import Clock from "./components/Clock";
import Weather from "./components/Weather";

import "./css/app.css";

function App() {
  return (
    <div className="App">
      <div className="board">
        <div className="column">
          <User />
          <PortfolioList />
          <Calendar />
        </div>
        <div className="column">
          <TodoList />
        </div>
        <div className="column">
          <Covid />
          <MusicPlayer />
          <Clock />
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
