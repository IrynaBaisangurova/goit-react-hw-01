import userDate from "../Profile/userDate.json";
import friends from "../FriendList/friends.json";
import items from "../TransactionHistory/transactions.json"

import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx"



export default function App() {
  return (
    <div className="css.container">
      <Profile
        username={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        avatar={userDate.avatar}
        stats={userDate.stats}
      />
       <FriendList friends = {friends} />
       <TransactionHistory items={items} />
    </div>
  );
}
