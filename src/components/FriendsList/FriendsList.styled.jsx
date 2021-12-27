import styled from '@emotion/styled';
export const FriendsGallery = styled.ul`
  display: block;
  list-style: none;
  margin-top: 35px;
`;
export const FriendInfo = styled.li`
  /* margin-right: 40px; */
  list-style: none;
  width: 450px;
  height: 100px;
  background-color: wheat;
  margin-bottom: 15px;
  padding: 15px 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 2px;
`;
export const Status = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
