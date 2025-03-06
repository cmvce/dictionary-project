import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>DICTIONARY 📕</h1>
        <Dictionary defaultWord='Hello' />
      </div>
      <footer>
        Coded by{" "}
        <a href='https://github.com/cmvce' target='blank_'>
          Coleene Acevedo
        </a>
      </footer>
    </div>
  );
}

export default App;
