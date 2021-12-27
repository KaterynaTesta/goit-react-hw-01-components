import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 450px;
  background-color: whitesmoke;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 2px;
  text-align: center;
`;
export const Description = styled.div`
  background-color: white;
  padding: 10px;
`;
export const Image = styled.img`
  max-width: 100px;
  width: 100%;
  border-radius: 50%;
`;
export const Username = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const Tag = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: grey;
`;
export const Location = styled.p`
  font-size: 15px;
  color: grey;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  list-style: none;
  border: 1px solid grey;
  border-radius: 20px;
  width: 100%;
`;
