import Login from "./Login";
import GameLevelOne from "./components/GameLevelOne";
import Timerbar from "./components/Timerbar";

function App() {
  return (
    <div>
      <Timerbar />
      <h1>Добро пожаловать в Quizlet</h1>
      <Login />
      <GameLevelOne />
    </div>
  );
}

export default App;
