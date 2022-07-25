import { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

export const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUser = (name, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: users.length, name: name, age: age },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
};
