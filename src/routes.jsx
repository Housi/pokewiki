/* eslint-disable react/prop-types */
import React from "react";
import Index from "./pages/Index";

const routes = {
  "/": () => <Index page="1" />,
  "/:page": ({ page }) => <Index page={page} />
};

export default routes;
