import styled from "styled-components";
import { Card } from "../UI/Card";

const StyledCard = styled(Card)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

export const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StyledCard>
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
    </StyledCard>
  );
};
