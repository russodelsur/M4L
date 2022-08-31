import React from "react";
// import ReactDOM from "react-dom";
import MapChart from "./MapChart";
import * as classes from './style.module.css';
import Leaf from "./LeafMap"


// import "./styles.css";

export function App() {
  return (
    <div className={classes.body}>
      <Leaf />
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// ReactDOM.render(
//   React.createElement(App),
//   document.getElementById('App')
// );

export default App;

