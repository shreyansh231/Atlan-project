<h1 align="center">
    🚀 Overview
This project is a web-based SQL editor that allows users to write, execute, and visualize SQL queries in an interactive environment. The application provides features such as syntax highlighting, CSV export, and real-time query execution feedback.
</h1>


<p align="center">
Crafted with <span style="color: #8b0000;">&hearts;</span> by Shreyansh Agrawal
</p>

<h2 align="center">Built using: </h2>
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
</p>

## View Demo on the Deployed Site 🚀

<p>Click https://atlansqleditor.vercel.app/ to view the deployed site</p>

## 👨‍💻 Features
:white_check_mark: Users can get data of any predefined SQL queries either by using the SQL Editor or Sidebar Menu.
:white_check_mark: Users can sort data directly by clicking the Table Headers title.
:white_check_mark: Users can search for specific data among many records using the search bar.
:white_check_mark: Users can download the output window table as CSV with just a single click.
:white_check_mark: Users can visualize query results using interactive graphs and charts powered by Recharts.

## ✍️ Predefined SQL Queries

SELECT * FROM products;
SELECT column1, column2 FROM table_name;
SELECT * FROM customers WHERE condition;
SELECT * FROM customers ORDER BY column_name;
SELECT * FROM customers LIMIT 5;
SELECT * FROM table_name WHERE condition ORDER BY column_name LIMIT 5;


## ⚙️ NPM Modules Used

- `"react-ace (v10.1.0)"`- To make the code editor.
- `"react-csv-to-table (v0.0.4)"`- To show the output as a simple CSV table.
- `"react-dom (v18.2.0)" `- To interact with React's virtual DOM.
- `"react-icons (v4.4.0)" `- To have an icon library.
- `"react-router-dom (v6.3.0)"`- To implement routing features provided by React.js.
- "react-toastify (v9.0.5)"- To show toast notifications for success or error events.
- `"react-csv (v2.2.2)"` -To export the output window table as CSV.
- `"react-syntax-highlighter (v15.6.1)"` -For syntax highlighting of SQL queries.
- `"recharts (v2.15.1)"`- For visualizing SQL query results in a graphical format.
- `"@testing-library/react, @testing-library/jest-dom, @testing-library/user-event"`- For testing purposes.
- `"web-vitals (v2.1.4)"`- For measuring performance metrics.



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
