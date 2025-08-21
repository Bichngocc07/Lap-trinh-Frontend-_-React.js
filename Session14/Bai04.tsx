import React, { Component } from "react";

type State = {
  slogan: string;
};

class Exercise01 extends Component<{}, State> {
  state: State = {
    slogan: "Học code để đi làm", // giá trị khởi tạo
  };

  // Hàm đổi state
  changeState = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!!", // giá trị sau khi click
    });
  };

  render() {
    return (
      <div>
        <h2>Slogan: "{this.state.slogan}"</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Exercise01;