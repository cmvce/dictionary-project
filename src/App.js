import "./App.css";
import SearchEngine from "./Dictionary";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Dictionary</h1>
        <SearchEngine />
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
