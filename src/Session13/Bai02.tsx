import React, { useState } from "react";

const Exercise02: React.FC = () => {
  // Khai báo state
  const [id] = useState(1);
  const [ten] = useState("Nguyễn Văn Sơn");
  const [ngaySinh] = useState("20/12/2023");
  const [diaChi] = useState("Thanh Xuân, Hà Nội");

  return (
    <div style={{ fontSize: "18px", lineHeight: "1.8" }}>
      <h2>Thông tin cá nhân</h2>
      <p>
        <b>id:</b> {id}
      </p>
      <p>
        <b>Tên:</b> {ten}
      </p>
      <p>
        <b>Ngày sinh:</b> {ngaySinh}
      </p>
      <p>
        <b>Địa chỉ:</b> {diaChi}
      </p>
    </div>
  );
};

export default Exercise02;
