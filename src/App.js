import React from "react";
import { Header, Webapp } from "./components";
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
        <Header />
        <Webapp />
      </>
    );
  }
}
export default App;
