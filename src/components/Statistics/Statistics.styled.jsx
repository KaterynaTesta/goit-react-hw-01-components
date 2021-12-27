import styled from '@emotion/styled';
export const Section = styled.section`
  max-width: 450px;
  background-color: whitesmoke;
  text-align: center;
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-top: 20px;
`;
export const StatsItem = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const getRandomHexColor = props => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
export const StatsElement = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 100%;
  border: 1px solid lightgrey;
  background-color: ${getRandomHexColor};
`;
