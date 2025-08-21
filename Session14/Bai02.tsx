import React from "react";

class Notification extends React.Component {
  // Phương thức vòng đời, chạy 1 lần sau khi component render lần đầu
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Notification Component</h2>
      </div>
    );
  }
}

export default Notification;
