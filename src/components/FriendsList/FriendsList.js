import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';
import { FriendsGallery } from './FriendsList.styled';

function FriendsList({ friends }) {
  return (
    <FriendsGallery>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
      ))}
    </FriendsGallery>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
