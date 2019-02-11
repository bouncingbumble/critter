import React, { Component } from 'react';
import './App.css';

const Profile = () => {
  return (
    <div className="card" style={{"width": "18rem"}}>
      <img className="card-img-top" src="kris.png" alt="profile pic"></img>
      <div className="card-body">
        <h5 className="card-title">Kristopherson Fox</h5>
        <p className="card-text">I am the greatest to ever play the game known as wackbat in the northwest regional section of Grassy Knoll.</p>
        <a href="#" >Tweets: 3</a><br></br>
        <a href="#" > Followers: 2</a><br></br>
        <a href="#" > Following: 10</a>
      </div>
  </div>
  )
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
