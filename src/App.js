import { useState } from "react";
import "./App.css";
import TableStructure from "./table";
import TableUI from "./tableUi";

function App() {
  const [header, setHeader] = useState([]);
  const [rows, setRows] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const [tableData, setTableData] = useState(1);
  const [mode, setMode] = useState("table");
  function getTableInfo(data) {
    let infoStore = null;
    if (data === 1) {
      infoStore = require("./customers.json");
    } else if (data === 2) {
      infoStore = require("./products.json");
    }
    let tableHeaders = [];
    let tableRows = [];
    for (var i = 0; i < infoStore.length; i++) {
      const row = infoStore[i];
      if (i === 0) {
        for (const item in row) {
          tableHeaders.push(row[item]);
        }
      } else {
        let temp = [];
        for (const item in row) {
          temp.push(row[item]);
        }
        tableRows.push(temp);
      }
    }
    return { tableHeaders, tableRows };
  }
  const customers = require("./customers.json");
  // const suppliers = require("./suppliers.json");
  const products = require("./products.json");
  return (
    <div className="App">
      <div className="App-sidebar">
        <div className="App-Suggestions">
          <p className="App-Suggestions-Title">Suggestions</p>
          <div className="App-Suggestions-List">
            <p
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery("SELECT * FROM products;");
                setTableData(2);
              }}
            >
              SELECT * FROM products;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery("SELECT column1, column2 FROM table_name;");
                setTableData(1);
              }}
            >
              SELECT column1, column2 FROM table_name;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery("SELECT * FROM customers WHERE condition;");
                setTableData(1);
              }}
            >
              SELECT * FROM customers WHERE condition;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery("SELECT * FROM customers ORDER BY column_name;");
                setTableData(1);
              }}
            >
              SELECT * FROM customers ORDER BY column_name;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery("SELECT * FROM customers LIMIT 5;");
                setTableData(1);
              }}
            >
              SELECT * FROM customers LIMIT 5;
            </p>
            <p
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery(
                  "SELECT * FROM table_name WHERE condition ORDER BY column_name LIMIT 5;"
                );
                setTableData(1);
              }}
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
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <div className="button-container">
          <button
            className="button"
            onClick={() => {
              setInputQuery("");
              setHeader([]);
              setRows([]);
            }}
          >
            Clear Query
          </button>
          <button
            className="button"
            onClick={() => {
              if(inputQuery === "") {
                alert("Please enter a query");
                return;
              }
              const { tableHeaders, tableRows } = getTableInfo(tableData);
              setHeader(tableHeaders);
              setRows(tableRows);
            }}
          >
            Run Query
          </button>
        </div>
        <div className="Output">
          <p className="Output-Title">Output</p>
          <div className="Output-Mode">
            <button
              className="Output-Mode-Button"
              onClick={() => setMode("table")}
            >
              Table
            </button>
            <button
              className="Output-Mode-Button"
              onClick={() => setMode("Graph")}
            >
              Graph
            </button>
          </div>
          <div className="Output-Data">
            <TableUI headers={header} rows={rows} />
          </div>
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
