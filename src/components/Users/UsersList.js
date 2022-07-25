import styled from "styled-components";
import { Card } from "../UI/Card";

const StyledUsersList = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

export const UsersList = ({ users }) => {
  return (
    <StyledUsersList>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </StyledUsersList>
  );
};
