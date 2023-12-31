import styled from "styled-components";

export const Button = styled.button`
  padding: .7em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

    &:hover {
        background-color: #7851a4;
        color: #fff;
        transform: translateY(-7px);
    } 
    
    &:active {
        transform: translateY(-1px);
    }
`;