import React from "react";

export default function List({ list, users }) {
  // useEffect(() => {
  //   console.log(users);

  // })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>{users.find((user) => user.id === item.personId)?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
