import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputQuery, setInputQuery] = useState("");
  const [ishoverQuery, setIshoverQuery] = useState(false);

  return (
    <div className="App">
      <div className="App-sidebar">
        <div className="App-Suggestions">
          <p className="App-Suggestions-Title">Suggestions</p>
          <div className="App-Suggestions-List">
            <p className="App-Suggestions-List-Item">
              SELECT * FROM table_name;
            </p>
            <p className="App-Suggestions-List-Item">
              SELECT column1, column2 FROM table_name;
            </p>
            <p className="App-Suggestions-List-Item">
              SELECT * FROM table_name WHERE condition;
            </p>
            <p className="App-Suggestions-List-Item">
              SELECT * FROM table_name ORDER BY column_name;
            </p>
            <p className="App-Suggestions-List-Item">
              SELECT * FROM table_name LIMIT 5;
            </p>
            <p className="App-Suggestions-List-Item">
              SELECT * FROM table_name WHERE condition ORDER BY column_name
              LIMIT 5;
            </p>
          </div>
        </div>
        <div className="App-tabledata"></div>
      </div>
      <div className="App-container">
        <header className="App-header">
          <p>Atlan Project on SQL Queries.</p>
        </header>
        <textarea
          className="textarea"
          onBlur={() => setIshoverQuery(false)}
          onFocus={() => setIshoverQuery(true)}
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <div className="button-container">
          <button className="button" onClick={() => setInputQuery("")}>
            Clear Query
          </button>
          <button className="button" onClick={() => console.log("Run Query")}>
            Run Query
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
