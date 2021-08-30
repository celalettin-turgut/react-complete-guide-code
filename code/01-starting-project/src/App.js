import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ListUsers from "./components/ListUsers/ListUsers";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div>
      <section>
        <AddUser users={users} setUsers={setUsers} />
      </section>
      <section>
        <ListUsers users={users} />
      </section>
    </div>
  );
}

export default App;
