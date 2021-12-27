import styled from '@emotion/styled';
export const Table = styled.table`
  margin-top: 30px;
  width: 450px;
  text-align: center;
  background-color: whitesmoke;
  border-radius: 10px;
  font-size: 20px;
  box-shadow: 2px 2px 5px 2px;
`;
export const TableCard = styled.thead`
  border-radius: 10px;
`;
export const TableList = styled.tr`
  background-color: cadetblue;
`;

export const TableItem = styled.tbody`
  background-color: cadetblue;
`;

export const TableItemTr = styled.tr`
  :nth-of-type(odd) {
    background-color: #F0FFFF;
  }
  :nth-of-type(even) {
    background-color: #E0FFFF;
  
`;
