import Header from "../pages/header";
import { Component } from "react";

export default class Homepage extends Component<{}, {}> {
  handleClick() {
    console.log("derp");
  }
  render() {
    return (
      <>
        <Header
          title="Andrew Sutherland Rules"
          backgroundColor="hpPurple"
          handleClick={this.handleClick.bind(this)}
        ></Header>
      </>
    );
  }
}
