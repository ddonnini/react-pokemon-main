//React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import App from "./App";
//Context
import { ContextProvider } from "./Context";

ReactDOM.render(
  <ContextProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
