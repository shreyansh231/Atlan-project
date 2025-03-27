import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Sidebar = ({ setInputQuery, setTableData }) => {
  const queries = [
    { query: "SELECT * FROM products;", tableData: 2 },
    { query: "SELECT column1, column2 FROM table_name;", tableData: 1 },
    { query: "SELECT * FROM customers WHERE condition;", tableData: 1 },
    { query: "SELECT * FROM customers ORDER BY column_name;", tableData: 1 },
    { query: "SELECT * FROM customers LIMIT 5;", tableData: 1 },
    {
      query:
        "SELECT * FROM table_name WHERE condition ORDER BY column_name LIMIT 5;",
      tableData: 1,
    },
  ];

  return (
    <div className="App-sidebar">
      <div className="App-Suggestions">
        <p className="App-Suggestions-Title">Suggestions</p>
        <div className="App-Suggestions-List">
          {queries.map((item, index) => (
            <div
              key={index}
              className="App-Suggestions-List-Item"
              onClick={() => {
                setInputQuery(item.query);
                setTableData(item.tableData);
              }}
            >
              <SyntaxHighlighter
                language="sql"
                style={atomDark}
                wrapLines={true}
                wrapLongLines={true}
                customStyle={{
                  overflowX: "auto",  // Enables horizontal scrolling
                  whiteSpace: "nowrap", // Prevents wrapping
                  scrollbarWidth: "none", // Hides scrollbar
                }}
               
              >
                {item.query}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
