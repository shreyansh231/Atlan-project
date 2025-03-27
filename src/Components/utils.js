export function getTableInfo(data) {
    let infoStore = null;
    if (data === 1) {
      infoStore = require("../data/customers.json");
    } else if (data === 2) {
      infoStore = require("../data/products.json");
    }
    
    let tableHeaders = Object.keys(infoStore[0]);
    let tableRows = infoStore.map((row) => Object.values(row));
    
    return { tableHeaders, tableRows };
  }
  
  export function generateGraphData(data) {
    let infoStore = null;
    if (data === 1) {
      infoStore = require("../data/customers.json");
    } else if (data === 2) {
      infoStore = require("../data/products.json");
    }
    
    let tableHeaders = Object.keys(infoStore[0]);
    let tableRows = infoStore.map((row) => Object.values(row));
    
    return tableRows.map((row, index) => ({
      name: tableHeaders[index],
      value: Number(row[data !== 1 ? 6 : 7]),
    }));
  }
  