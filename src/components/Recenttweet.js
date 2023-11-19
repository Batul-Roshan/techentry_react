import React, { useState } from "react";
//import icon from "../verifiedicon.png"
function Recenttweet({ tweetStack }) {

    return (
        <div className="recent-tweet">
            <h2>Recent Posts</h2>
            {tweetStack.slice().reverse().map((tweet) => (
                <div className="tweet" key={tweet.id}>
                    <p>
                        <strong>{tweet.name}</strong>
                        {/* <img src={icon} width="15px" height="15px" /> */}
                        <small>@{tweet.userHandle} . {tweet.date}</small>
                    </p>

                    <p>{tweet.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Recenttweet;
