import Profile from './PageProfiel/Profile';
import user from 'user.json';
import Statistics from './Statistics/Statistics'
import data from 'data.json'
import FriendList from './FriendList/FriendList'
import friends from 'friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from 'transactions.json';

console.log('transactions', transactions);


export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}