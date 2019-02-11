import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

const store = configureStore();

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
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className="card">
            <h5 className="card-header">I am Feed</h5>
            <Tweet/>
            <Tweet/>
            <Tweet/>
          </div>
        </div>
      </div>
    </div>
  )
}
const Tweet = () => {
  return (
    <div className='container' >
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">I am name of tweeter</h5>
          <p className="card-text">When George Washington founded a little startup we've come to know as these United States of America, and he was tired of getting shit from his CEO, the King of England, did he give up? No. He said, "Avast, ye fellow badasses, let's build this country the way we motherfucking want to."</p>
          <a href="#" >Retweet</a>
          <a href="#" > Favorite</a>
          <a href="#" > Reply</a>
        </div>
      </div>
    </div>
  )
}
const TweetForm = () => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Put profile pic here</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What's on your mind ol' sport?"></textarea>
        <button className="btn btn-primary" type="submit">Tweet!</button>
      </div>
    </form>
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="iamnav">
              <Navbar/>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Profile/>
                </div>
                <div className="col-6">
                  <TweetForm/>
                  <Feed/>
                </div>
                <div className="col">
                
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
