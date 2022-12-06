import React from "react";
import ReactDOM from "react-dom/client";

import CHeader from "./CHeader.js";
import CardContainer from "./components/cards/CardContainer.js";

/**
 * 
 * @returns composition of components
 */

const CompositionComponent = () => {
  return (
    <>
      <CHeader/>
     <CardContainer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CompositionComponent>!!!!!!!!!!!!Not Visble Why ?(in angular like content projection(ng-content)</CompositionComponent>);
