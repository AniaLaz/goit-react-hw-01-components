import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ isOnline, avatar, name }) => {
  return (
    <>
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
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
