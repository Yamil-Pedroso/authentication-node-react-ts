import styled from 'styled-components';

export const Button = styled.button`
     display: inline-block;
     padding: 0.9rem 1.8rem;
     font-size: 16px;
     font-weight: 700;
     color: #fff;
     background-color: #7655ad;
     cursor: pointer;
     position: relative;
     text-decoration: none;
     overflow: hidden;
     border-radius: 5px;
     z-index: 1;
     font-family: inherit;
     width: 100%;
     border: none;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #644caa;
      transform: translateX(-100%);
      transition: all .3s;
      z-index: -1;
    }

    &:hover::before {
      transform: translateX(0);
    }
`;



export const Input = styled.input`
    border-radius: 5px;
    font-size: 16px;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    width: 100%;
    border: 1px solid #ccc;

    &:focus {
        border-color: #6e5ba6;
        outline: none;
    }
`;