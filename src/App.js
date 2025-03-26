import { useState } from "react";
import "./App.css";
import TableStructure from "./table";

function App() {
  const [inputQuery, setInputQuery] = useState("");
  const [ishoverQuery, setIshoverQuery] = useState(false);
  const customers = require("./customers.json");
  const suppliers = require("./suppliers.json");
  const products = require("./products.json");
  return (
    <div className="App">
      <div className="App-sidebar">
        <div className="App-Suggestions">
          <p className="App-Suggestions-Title">Suggestions</p>
          <div className="App-Suggestions-List">
            <p
              className="App-Suggestions-List-Item"
              onClick={() => setInputQuery("SELECT * FROM table_name;")}
            >
              SELECT * FROM table_name;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() =>
                setInputQuery("SELECT column1, column2 FROM table_name;")
              }
            >
              SELECT column1, column2 FROM table_name;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() =>
                setInputQuery("SELECT * FROM table_name WHERE condition;")
              }
            >
              SELECT * FROM table_name WHERE condition;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() =>
                setInputQuery("SELECT * FROM table_name ORDER BY column_name;")
              }
            >
              SELECT * FROM table_name ORDER BY column_name;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() => setInputQuery("SELECT * FROM table_name LIMIT 5;")}
            >
              SELECT * FROM table_name LIMIT 5;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() =>
                setInputQuery(
                  "SELECT * FROM table_name WHERE condition ORDER BY column_name LIMIT 5;"
                )
              }
            >
              SELECT * FROM table_name WHERE condition ORDER BY column_name
              LIMIT 5;
            </p>
          </div>
        </div>
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
      <div className="App-tabledata">
        <p className="App-tabledata-Title">Table Data</p>
        <div className="App-tabledata-List">
          <TableStructure
            tableHead={Object.keys(customers[0])}
            tableName="customers"
            tableNo={1}
          />
          <TableStructure
            tableHead={Object.keys(products[0])}
            tableName="products"
            tableNo={2}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
