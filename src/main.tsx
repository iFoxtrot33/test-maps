import React from "react";
import ReactDOM from "react-dom/client";
import PureMap from "./PureMap";
import MapWithLibrary from "./MapWithLibrary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <MapWithLibrary />
    <PureMap />
  </>
);
