import styled from "styled-components";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { Card } from "./Card";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  .header {
    background: #4f005f;
    padding: 1rem;
  }

  .header h2 {
    margin: 0;
    color: white;
  }

  .content {
    padding: 1rem;
  }

  .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

const Backdrop = ({ onErrorClose }) => {
  return <StyledBackdrop className="backdrop" onClick={onErrorClose} />;
};

const ModalOverlay = ({ title, message, onErrorClose }) => {
  return (
    <StyledCard className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <Button onClick={onErrorClose}>Okay</Button>
      </footer>
    </StyledCard>
  );
};

export const ErrorModal = ({ title, message, onErrorClose }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onErrorClose={onErrorClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onErrorClose={onErrorClose}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
