import styled from "styled-components";

export const ColorBlock = styled.div`
  margin-top: 10px;
  display: flex;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.hex};
`;
