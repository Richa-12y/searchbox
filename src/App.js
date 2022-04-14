import { useState } from "react";
import "./app.css";
import Table from "./Table";
import { Users } from "./Users";
function App() {
  //////////////////////BASIC SEARCH
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];
  //////////////////////One of way to filter firstname,lastname,email
  // const search = (data) => {
  //   return data.filter(
  //     (item) =>
  //       item.first_name.toLowerCase().includes(query) ||
  //       item.last_name.toLowerCase().includes(query) ||
  //       item.email.toLowerCase().includes(query)
  //   );
  //};

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
