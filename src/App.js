import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { getTableInfo, generateGraphData } from "./Components/utils";

import Sidebar from "./Components/Sidebar";
import Input from "./Components/Input";
import Output from "./Components/Output";
import TableData from "./Components/TableData";

function App() {
  const [csvData, setCSVData] = useState([]);
  const [DLmode, setDLmode] = useState(1);
  const [header, setHeader] = useState([]);
  const [rows, setRows] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const [tableData, setTableData] = useState(1);
  const [mode, setMode] = useState("table");
  const [graphData, setGraphData] = useState([]);

  const customers = require("./data/customers.json");
  // const suppliers = require("./data/suppliers.json");
  const products = require("./data/products.json");
  return (
    <>
      <ToastContainer />

      <div className={`App ${DLmode ? "" : "dark-mode"}`}>
        <Sidebar setInputQuery={setInputQuery} setTableData={setTableData} />
        <div className="App-container">
          <Input
            setDLmode={setDLmode}
            DLmode={DLmode}
            inputQuery={inputQuery}
            setInputQuery={setInputQuery}
            setHeader={setHeader}
            setRows={setRows}
            setGraphData={setGraphData}
            getTableInfo={getTableInfo}
            generateGraphData={generateGraphData}
            tableData={tableData}
            setCSVData={setCSVData}
          />
          <Output
            rows={rows}
            mode={mode}
            setMode={setMode}
            graphData={graphData}
            csvData={csvData}
            header={header}
          />
        </div>
        <TableData customers={customers} products={products}/>
      </div>
    </>
  );
}

export default App;
