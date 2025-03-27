import { toast } from "react-toastify";

const Input = ({
  setDLmode,
  DLmode,
  inputQuery,
  setInputQuery,
  setHeader,
  setRows,
  setGraphData,
  getTableInfo,
  generateGraphData,
  tableData,
  setCSVData,
}) => {
  return (
    <>
      <header className="App-header">
        <div
          className="DLMode"
          onClick={() => setDLmode(!DLmode)}
          style={{
            position: "absolute",
            top: "15px",
            right: "5px",
            fontSize: "15px",
            cursor: "pointer",
            border: "2px #000000 solid",
            padding: "2px",
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
        placeholder="Write SQL query here..."
      />
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setInputQuery("");
            setHeader([]);
            setRows([]);
            setGraphData([]);
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
    </>
  );
};

export default Input;
