import React from "react";

type State = {
  company: string;
};

class CompanyComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state
    this.state = {
      company: "Rikkei Academy",
    };
  }

  // Hàm thay đổi state khi click
  changeState = () => {
    this.setState({
      company: "RikkeiSoft",
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default CompanyComponent;
