import React, { useState } from "react";

// Component con
interface ChildrenProps {
  ten: string;
}

const Children_Comp: React.FC<ChildrenProps> = ({ ten }) => {
  return (
    <div>
      <p>Họ và tên bên component con : {ten}</p>
    </div>
  );
};

// Component cha
const Parent_Comp: React.FC = () => {
  const [banThan, setBanThan] = useState("Nguyễn Văn Nam");

  return (
    <div>
      <p>Họ và tên bên component cha : {banThan}</p>
      {/* Truyền dữ liệu xuống component con */}
      <Children_Comp ten={banThan} />
    </div>
  );
};

export default Parent_Comp;
