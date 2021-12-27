import PropTypes from 'prop-types';
import defaultImg from './defaultImg.jpg';
import {
  Container,
  Description,
  Image,
  Username,
  Tag,
  Location,
  Stats,
  ListItem,
} from './Profile.styled';
export default function Profile(props) {
  const {
    avatar = defaultImg,
    username = 'unknown',
    tag = 'unknown',
    location,
    followers,
    views,
    likes,
  } = props;
  return (
    <Container>
      <Description>
        <Image src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ListItem>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </ListItem>
      </Stats>
    </Container>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
