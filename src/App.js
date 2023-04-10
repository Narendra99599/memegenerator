import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="App">
      <h1 className="heading">RANDOM GIF</h1>
      <div className="container">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
