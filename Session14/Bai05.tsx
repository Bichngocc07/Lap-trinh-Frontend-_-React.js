import React, { Component, ChangeEvent, FormEvent } from "react";

type State = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

class ProductForm extends Component<{}, State> {
  state: State = {
    productCode: "",
    productName: "",
    price: 0,
    quantity: 0,
  };

  // Cập nhật state khi nhập liệu
  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    } as unknown as Pick<State, keyof State>);
  };

  // Xử lý khi submit form
  handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // chặn reload trang
    console.log("Dữ liệu product:", this.state);
  };

  render() {
    return (
      <div style={{ width: "300px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h3>Thêm mới sản phẩm</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" style={{ marginTop: "10px" }}>
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
