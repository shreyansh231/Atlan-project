import React from "react";
import "./tableUI.css";

function TableUI({ headers, rows }) {
  return (
    <div className="table-container-output">
      <table className="custom-table-output">
        <thead >
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="table-header-output">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell-output">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUI;
