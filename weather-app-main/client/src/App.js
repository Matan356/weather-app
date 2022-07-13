import "./App.css";
import Main from "./pages/Main/Main";
import WeatherContext from "./context/WeatherContext";

function App() {
  return (
    <div className="app">
      <WeatherContext>
        <Main />
      </WeatherContext>
    </div>
  );
}

export default App;
