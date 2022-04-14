import React from "react";

export default function Table({ data }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
//<ul className="list">
// {Users.filter((asd) =>
//     asd.first_name.toLowerCase().includes(query)
//   ).map((user) => (
//     <li className="listItem" key={user.id}>
//       {user.first_name}
//     </li>
//   ))}
// </ul>
