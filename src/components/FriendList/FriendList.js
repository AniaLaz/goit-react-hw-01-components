import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';



const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          {friend.isOnline ? (
            <div className={css.status} width="5" height="5"></div>
          ) : (
            <div className={css.isOnline} width="5" height="5"></div>
          )}

          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="20"
            height="20"
          />
          <span>{friend.name}</span>
        </li>
      ))}
</>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;


