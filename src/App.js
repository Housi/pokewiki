/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useRoutes } from "hookrouter";

import routes from "./routes";

import "./App.css";

function App() {
  const routeResult = useRoutes(routes);

  return <div>{routeResult}</div>;
}

export default App;
