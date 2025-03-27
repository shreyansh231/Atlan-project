const Sidebar = ({setInputQuery,setTableData}) => {
    return (
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
    )
}

export default Sidebar;