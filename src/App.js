import { useState } from "react";
import "./App.css";
import TableStructure from "./table";
import TableUI from "./tableUi";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [csvData, setCSVData] = useState([]);
  const [DLmode, setDLmode] = useState(1);
  const [header, setHeader] = useState([]);
  const [rows, setRows] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const [tableData, setTableData] = useState(1);
  const [mode, setMode] = useState("table");
  const [graphData, setGraphData] = useState([]);
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

  // graph logic added

  function generateGraphData(data) {
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
    console.log(tableRows);
    return tableRows.map((row, index) => ({
      name: tableHeaders[index],
      value: Number(row[tableData !== 1 ? 6 : 7]),
    }));
  }

  const customers = require("./customers.json");
  // const suppliers = require("./suppliers.json");
  const products = require("./products.json");
  return (
    <>
      <ToastContainer />

      <div className={`App ${DLmode ? "" : "dark-mode"}`}>
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
                  setInputQuery(
                    "SELECT * FROM customers ORDER BY column_name;"
                  );
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
            <div
              className="DLMode"
              onClick={() => setDLmode(!DLmode)}
              style={{
                cursor: "pointer",
                border: "2px #000000 solid",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: DLmode ? "#000000" : "#FFFFFF",
                color: DLmode ? "#FFFFFF" : "#000000",
                width: "fit-content",
              }}
            >
              {DLmode ? "Dark Mode" : "Light Mode"}
            </div>
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
                if (inputQuery === "") {
                  alert("Please enter a query");
                  return;
                }
                const { tableHeaders, tableRows } = getTableInfo(tableData);
                setHeader(tableHeaders);
                setRows(tableRows);
                const newGraphData = generateGraphData(tableData);
                setGraphData(newGraphData);
                const temp = [];
                if (tableHeaders.length > 0 && tableRows.length > 0) {
                  temp.push(tableHeaders);
                  tableRows.forEach((row) => {
                    temp.push(row);
                  });
                  setCSVData(temp);
                }
                toast.success("Query executed successfully!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: DLmode ? "dark" : "light", // Adapt to Dark/Light mode
                });
              }}
            >
              Run Query
            </button>
          </div>
          <div className="Output">
            <p className="Output-Title">Output</p>
            <div className="Output-Mode">
              <button
                className={`Output-Mode-Button ${
                  mode === "table" ? "active" : ""
                }`}
                onClick={() => setMode("table")}
              >
                Table
              </button>
              <button
                className={`Output-Mode-Button ${
                  mode === "Graph" ? "active" : ""
                }`}
                onClick={() => setMode("Graph")}
              >
                Graph
              </button>
              <CSVLink
                data={csvData}
                filename={new Date().getTime().toString() + ".csv"}
                className="p-2"
              >
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 40.496 36"
                    className="fill-current"
                  >
                    <path
                      id="Icon_awesome-file-export"
                      d="M27,8.571a1.682,1.682,0,0,0-.492-1.188L19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9ZM40.148,21.656,33.42,14.878a1.128,1.128,0,0,0-1.927.795V20.25h-4.5v4.5h4.5v4.584a1.128,1.128,0,0,0,1.927.795l6.729-6.785A1.2,1.2,0,0,0,40.148,21.656ZM13.5,23.625v-2.25a1.128,1.128,0,0,1,1.125-1.125H27v-9H17.438A1.692,1.692,0,0,1,15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V24.75H14.625A1.128,1.128,0,0,1,13.5,23.625Z"
                    />
                  </svg>
                  <span className="pl-2 font-semibold">Export CSV</span>
                </button>
              </CSVLink>
            </div>
            <div className="Output-Data">
              {mode === "table" ? (
                <TableUI headers={header} rows={rows} />
              ) : (
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              )}
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
    </>
  );
}

export default App;
