
import styled from "styled-components";
// import { ReactComponent as RemoveSgv } from "../../assets/images/remove.svg";
// import { ReactComponent as EditSvg } from "../../assets/images/edit.svg";

const TableList = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;

const Thead = styled.thead`
  @media (max-width: 800px) {
    display: none;
  }
`;

const Th = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  background: #ff2e00;
  color: #fff;
`;

const Tbody = styled.tbody`
  @media (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #f4f4f4;
    border-radius: 4px;
  }
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Td = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    text-align: right;
    padding-left: 50%;
    position: relative;
    &:before {
      content: "Test";
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
    }
    &:last-child {
      border-radius: 0px 0px 4px 4px;
    }
    &:first-child {
      border-radius: 4px 4px 0px 0px;
    }
  }
`;

const ActionsContainer = styled.span`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media (max-width: 518px) {
    justify-content: flex-end;
  }
`;

// const Remove = styled(RemoveSgv)`
//   width: 20px;
//   height: 20px;
//   cursor: pointer;
// `;
// const Edit = styled(EditSvg)`
//   width: 20px;
//   height: 20px;
//   cursor: pointer;
// `;

export { TableList, Thead, Th, Tbody, Tr, Td, ActionsContainer };