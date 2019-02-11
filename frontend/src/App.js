import React, { Component } from 'react';
import './App.css';

const Profile = () => {
  return (<h2>I am user profile</h2>)
}
const Feed = () => {
  return (<h2>I am Feed</h2>)
}
const Tweet = () => {
  return (<h2>I am Tweet</h2>)
}
const TweetForm = () => {
  return (<h2>I am TweetForm</h2>)
}

class App extends Component {
  render() {
    return (
      <div>
      <h1>y u no look like twitter</h1>
      <Profile/>
      <Feed/>
      <Tweet/>
      <TweetForm/>
      </div>
    );
  }
}

export default App;
