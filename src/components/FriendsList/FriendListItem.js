import PropTypes from 'prop-types';
import { FriendsGallery, FriendInfo, Status } from './FriendsList.styled';
const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsGallery>
      <FriendInfo>
        <Status status={isOnline}></Status>
        <img src={avatar} alt="User avatar" width="48" />
        <p> {name}</p>
      </FriendInfo>
    </FriendsGallery>
  );
};
FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendsListItem;
