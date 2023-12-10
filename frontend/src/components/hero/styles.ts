import styled, { keyframes } from "styled-components";

const ani = keyframes`
    0% {
    transform: scale(0.7, 1.3);
  }

  25% {
    transform: scale(1.3, 0.7);
  }

  50% {
    transform: scale(0.7, 1.3);
  }

  75% {
    transform: scale(1.3, 0.7);
  }

  100% {
    transform: scale(1, 1);
  }
`;

export const Button = styled.button`
      padding: 15px 30px;
      font-size: 18px;
      outline: none;
      border: none;
      border-radius: 10px;
      transition: 0.5s;
      background: #7851a4;
      color: #fff;
      box-shadow: 0 0 0 0px #363636;

    &:hover {
        animation: ${ani} 0.5s 1 linear;
    }
`;