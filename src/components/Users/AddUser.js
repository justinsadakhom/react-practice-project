import styled from "styled-components";
import { useState } from "react";
import { Button } from "../UI/Button";
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
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const isValid =
      username.trim().length !== 0 || (age.trim().length !== 0 && +age > 0);

    if (isValid) {
      setUsername("");
      setAge("");
    }
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitUserHandler = () => {};

  return (
    <StyledCard>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
        </div>
        <Button type="submit" onClick={submitUserHandler}>
          Add User
        </Button>
      </form>
    </StyledCard>
  );
};
