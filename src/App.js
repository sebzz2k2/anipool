import React from "react";
import { Webapp } from "./components";
import "./App.css";
class App extends React.Component {
  componentDidMount() {
    console.log("Component did mount");
  }
  render() {
    return (
      <>
        <Webapp />
      </>
    );
  }
}
export default App;
