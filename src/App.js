import React from "react";
import { Webapp } from "./components";
import "./App.css";
class App extends React.Component {
  state = {
    advice: "",
  };
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
