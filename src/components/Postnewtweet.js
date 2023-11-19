import React, { useState } from "react";



function Postnewtweet({ pushTweet, numTweets }) {
    const [tweetText, setTweetText] = useState("");

    const handleTweetTextChange = (e) => {
        setTweetText(e.target.value);
    };

    const handleTweetSubmit = () => {
        // Implement the logic to post the tweet here
        const tweetData = tweetText;

        let myTweet = {
            id: 17001,
            name: "Batul Roshan",
            userHandle: "bats_pm_techentry",
            date: `${new Date().getHours()}h`,
            text: tweetData
        }
        pushTweet(myTweet);
        numTweets();
        setTweetText("");
    };

    return (
        <div className="post-new-tweet">
            <div className="tweet-input">
                <textarea
                    placeholder="What's happening? 🙇🏻"
                    value={tweetText}
                    onChange={handleTweetTextChange}
                ></textarea>
            </div>
            <div className="tweet-button">
                <button onClick={handleTweetSubmit}>Post</button>
            </div>
        </div>
    );
}

export default Postnewtweet;
