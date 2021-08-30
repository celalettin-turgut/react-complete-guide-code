import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <section>
        <AddUser users={users} setUsers={setUsers} />
      </section>
    </div>
  );
}

export default App;
