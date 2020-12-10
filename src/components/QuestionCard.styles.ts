import styled from "styled-components";

export const Wraper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 0.7rem;
  border: 2px solid #0085a3;
  padding: 1.2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWraperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWraper = styled.div<ButtonWraperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 2.5rem;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,#56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5656, #c16868)"
        : "linear-gradient(90deg,#56ccff, #6eafb4)"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`;
