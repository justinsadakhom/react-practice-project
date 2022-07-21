export const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};
