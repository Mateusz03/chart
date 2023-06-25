import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  right: 20%;
  top: 40vh;
  border: 1px solid black;
`;

export const StyledColumn = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  background-color: ${(p) => (p.color === "pink" ? "#F2BED1" : "#79E0EE")};
  padding: 10px;
`;

export const StyledCanals = styled.div``;

export const StyledQty = styled.div``;

export const StyledUpdateButton = styled.div`
  width: 100px;
  height: 20px;

  text-align: center;
`;

export const StyledDeleteButton = styled.div`
  width: 100px;
  height: 20px;

  text-align: center;
`;
