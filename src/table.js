import "./App.css";

function TableStructure({ tableName, tableHead, tableNo }) {
  return (
    <div className="table-container">
      <div className="table-header">
        <p className="table-title">.{tableName}</p>
      </div>
      {tableHead.map((row, index) => (
        <div className="table-row" key={index}>
          <div className="table-branch"></div>
          <p className="table-column">
            {row} <span className="table-datatype">[varchar(40)]</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TableStructure;
