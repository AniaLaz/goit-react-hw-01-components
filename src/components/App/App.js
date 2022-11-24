import Profile from '../PageProfiel/Profile';
import user from 'user.json';
import Statistics from '../Statistics/Statistics';
import data from 'data.json';
import FriendList from '../FriendList/FriendList';
import friends from 'friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';
import css from '../App/App.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = getRandomHexColor();




export default function App() {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title={data.title} stats={data} color={color} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
