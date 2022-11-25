import PropTypes from 'prop-types';
import FriendList from '../FriendList/FriendList';
import css from '../FriendList/FriendList.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendList
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;
