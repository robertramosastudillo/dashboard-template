import styled from "styled-components";

const CustomButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border-radius: 0.8rem;
  height: 45px;
  font-weight: bold;
  background-color: #FF5151;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken(#FF5151, 4);
    box-shadow: 0px 0px 16px darken(#FF5151, 4);
  }
`;

export { CustomButton };
