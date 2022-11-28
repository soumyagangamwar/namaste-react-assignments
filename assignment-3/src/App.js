import React from "react";
import ReactDOM from "react-dom/client";
import { createElement } from "react";
const heading = React.createElement("h1", { id: "title" }, "Namaste react!!");

/**
 * * Creating a Nested Header Component using React.createElement
 * * Component should be rendered like this
 * * (<div class="title">
 * * <h1></h1>
 * * <h2></h2>
 * * <h3></h3>
 * * </div>)
 */
const elementWithCreateReactElement = createElement(
  "div",
  { className: "title" },
  React.createElement("h1", {}, "Namaste React H1"),
  React.createElement("h2", {}, "Namaste React H2"),
  React.createElement("h3", {}, "Namaste React H3")
);

/**
 * * Creating the same element using JSX
 */
const JSXElement = (
  <div className="title">
    <h1>Namaste React Using JSX H1</h1>
    <h2>Namaste React Using JSX H2</h2>
    <h3>Namaste React Using JSX H3</h3>
  </div>
);

/**
 * Function component using jsx
 */

const ElementJSXWithFC = () => {
  return (
    <div className="title">
      <h1>Namaste React Using JSX FC H1</h1>
      <h2>Namaste React Using JSX FC H2</h2>
      <h3>Namaste React Using JSX FC H3</h3>
    </div>
  );
};

const H1Component = () => <h1>Namaste React H1</h1>;
const H2Component = () => <h2>Namaste React H2</h2>;
const H3Component = () => <h3>Namaste React H3</h3>;

const CompositionComponent = () => {
  return (
    <>
      <H1Component></H1Component>
      <H2Component />
      {H2Component()}
      <H3Component></H3Component>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(elementWithCreateReactElement);
//root.render(JSXElement);
//root.render(<ElementJSXWithFC />);
root.render(<CompositionComponent>!!!!!!!!!!!!Not Visble Why ?(in angular like content projection(ng-content)</CompositionComponent>);
