import Profile from '../PageProfiel/Profile';
import user from 'user.json';
import Statistics from '../Statistics/Statistics';
import data from 'data.json';
import FriendListItem from '../FriendList/FriendListItem';
import friends from 'friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';
import css from '../App/App.module.css'


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
      <Statistics title="Upload stats" stats={data} />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
