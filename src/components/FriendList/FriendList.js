import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';



const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map(({id,isOnline,avatar,name }) => (
        <li className={css.item} key={id}>
          {isOnline ? (
            <span className={css.status} width="5" height="5"></span>
          ) : (
            <span className={css.isOnline} width="5" height="5"></span>
          )}

          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="20"
            height="20"
          />
          <span>{name}</span>
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


