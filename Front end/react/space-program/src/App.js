import "./scss/main.scss"
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Destination/>
    </div>
  );
}

export default App;
