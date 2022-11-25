import PropTypes from 'prop-types';
import FriendList from '../FriendList/FriendList';
import css from '../FriendList/FriendList.module.css';

const FriendListItem = ({ friends }) => {
     return (
        <ul className={css.friend_list}>
         <FriendList friends={friends} />
        </ul>
    );
};

export default FriendListItem;