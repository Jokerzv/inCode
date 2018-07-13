import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  position: "relative",
  height: "100%"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Hello />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
