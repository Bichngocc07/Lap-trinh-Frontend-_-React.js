import React, { Component } from "react";

type State = {
  userName: string;
};

class Exercise01 extends Component<{}, State> {
  state: State = {
    userName: "Nguyễn Văn Nam",
  };

  componentDidMount() {
    console.log("Component đã được mount, state hiện tại:", this.state.userName);
  }

  render() {
    return (
      <div>
        <h2>Họ và tên của tôi là: {this.state.userName}</h2>
      </div>
    );
  }
}

export default Exercise01;
