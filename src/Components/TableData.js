import TableStructure from "./table";

const TableData = ({customers,products}) => {
    return (
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
    )
}

export default TableData;