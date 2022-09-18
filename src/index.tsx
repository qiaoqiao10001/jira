/*
 * @Title: $1
 * @Package: $2
 * @Description: $3
 * @Date: 2022-09-09 11:25:16
 * @Author: zhangqiao
 * @Version: v1.0
 * @License: Copyright Since 2015 Hive Box Technology. All rights reserved.
 * @Notice: This content is limited to the internal circulation of Hive Box, and it is prohibited to leak or used for other commercial purposes
 */
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import App from "./App";

// import { AuthContext } from "context/auth-context";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mock/browser");
//   worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <AuthContext.Provider value={login}>
  <App />
  // </AuthContext.Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
