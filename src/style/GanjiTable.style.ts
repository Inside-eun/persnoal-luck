import styled from "styled-components";

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: fit-content;
  margin: auto;
  margin-bottom: 40px;
`;

export const TableRow = styled.div`
  display: contents; /* For creating a grid with rows */
`;

export const TableCell = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
`;
