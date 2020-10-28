import React from "react";
import { render } from "react-dom";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "routes/routes";
import "./styles/base.scss";

function runApp(): void {
  try {
    render(
      <Router>{renderRoutes(routes)}</Router>,
      document.getElementById("root")
    );
  } catch (error) {
    console.log(error);
  }
}

runApp();
