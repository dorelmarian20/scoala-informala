import React, { useState, useEffect } from "react";
//import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Dorel");
  const message = "Work";
  useEffect(()=>{

  }[textInput]);
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
