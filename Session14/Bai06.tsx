import React, { Component, ChangeEvent, FormEvent } from "react";

type State = {
  gender: string;
};

class GenderForm extends Component<{}, State> {
  state: State = {
    gender: "",
  };

  // Cập nhật state khi chọn radio
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  // Xử lý khi submit form
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Giới tính đã chọn:", this.state.gender);
  };

  render() {
    return (
      <div style={{ width: "250px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <form onSubmit={this.handleSubmit}>
          <p>Giới tính: {this.state.gender || "Chưa chọn"}</p>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={this.state.gender === "Nam"}
                onChange={this.handleChange}
              />
              Nam
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={this.state.gender === "Nữ"}
                onChange={this.handleChange}
              />
              Nữ
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={this.state.gender === "Khác"}
                onChange={this.handleChange}
              />
              Khác
            </label>
          </div>

          <button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default GenderForm; 