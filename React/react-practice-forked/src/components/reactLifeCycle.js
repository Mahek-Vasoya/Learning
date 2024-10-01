import React from "react";

class ReactLifeCycle extends React.Component {
  constructor(props) {
    console.log("constructor");
    super();
    this.state = {
      counter: 1
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>React Life Cycle</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {this.state.counter}: counter
        </button>
      </>
    );
  }
}

export default ReactLifeCycle;
