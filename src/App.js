import React, { useState, useEffect } from "react";
import Profileinfo from "./components/Profileinfo";
import Postnewtweet from "./components/Postnewtweet";
import Recenttweet from "./components/Recenttweet";
import Tofollow from "./components/Tofollow";
import Navbar from "./components/Navbar";
import TechNews from "./components/TechNews";

import users from "./users";
import axios from 'axios';


//import Login from "./components/Login";
function App() {
  const userInfo = users.data.user
  const [numOfTweets, setNumOfTweets] = useState(userInfo[0].tweets);
  const [numOfFollowing, setNumOfFollowing] = useState(userInfo[0].following);
  const numTweets = () => {
    setNumOfTweets(numOfTweets => numOfTweets + 1)
  };
  const numFollowing = () => {

    setNumOfFollowing(numOfFollowing => numOfFollowing + 1)

  };



  const [tweetStack, setTweetStack] = useState([
    {
      id: 1,
      name: "Jane Smith",
      userHandle: "jane_smith",
      date: `${new Date().getHours() - 3}h`,
      text: "Just had a fantastic lunch! 🍔🍟"
    },
    {
      id: 2,
      name: "John Doe",
      userHandle: "john_doe",
      date: `${new Date().getHours() - 2}h`,
      text: "This is my first tweet. #Excited"
    },
    // Add more tweet objects as needed
  ]);

  // Push a new tweet onto the stack
  const pushTweet = (tweet) => {
    setTweetStack((prevStack) => [...prevStack, tweet]);
  };
  const [nonFollowingEmployees, setNonFollowingEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/get_non_following_employees')
      .then((response) => {
        setNonFollowingEmployees(response.data);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Profileinfo
          key={userInfo[0].handle}
          name={userInfo[0].username}
          tweets={numOfTweets}
          following={numOfFollowing}
          followers={userInfo[0].followers}
        />
        <Postnewtweet pushTweet={pushTweet} numTweets={numTweets} />
        <Tofollow nonFollowingEmployees={nonFollowingEmployees} setNonFollowingEmployees={setNonFollowingEmployees} numFollowing={numFollowing} />
        <Recenttweet tweetStack={tweetStack} />
        <TechNews />





      </div>
    </div>
  );
}

export default App;
