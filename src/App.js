import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

export const App = () => {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
};
