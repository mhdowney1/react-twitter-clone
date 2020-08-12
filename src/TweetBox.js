import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  // keep track of user input with state
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault(); // prevents refresh

    db.collection("posts").add({
      displayName: "Mick SAV",
      username: "savvymick",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://gravatar.com/avatar/fd6a77ece007e36b6615d17b9d0fcb4d?s=400&d=robohash&r=x",
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://gravatar.com/avatar/754f82ceb274c0f782f8bf00c7c970c5?s=400&d=robohash&r=x" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
