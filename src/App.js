import user from './social-profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendsList/friends.json';
import transactions from './components/transactions/transactions.json';

import FriendsList from './components/FriendsList/FriendsList';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/statistics';
import TransactionHistory from './components/transactions/transactionHistory';
import { Container } from './App.styled.jsx';

function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}
export default App;
