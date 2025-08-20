import React, { useState } from "react";

const Exercise03: React.FC = () => {
  // State khởi tạo danh sách users
  const [users] = useState([
    { id: 1, name: "Mary", age: 25 },
    { id: 3, name: "Jane", age: 20 },
  ]);

  return (
    <div>
      <h2>Danh sách Users</h2>
      <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise03;
