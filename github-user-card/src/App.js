import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  fetchUser = () => {
    fetch("https://api.github.com/users/sophiasagan")
    .then(res => {
      return res.json();
    })
    .then(cards => {
      this.setState({ user: cards });
      console.log(cards);
    })
    .catch(error => {
      console.log('No cards to show', error);
    });
};

fetchFollower = () => {
  fetch("https://api.github.com/users/sophiasagan/followers")
  .then(res => {
    return res.json();
  })
  .then(cards => {
    this.setState({ followers: cards });
    console.log(cards);
  })
  .catch(error => {
    console.log('No followers to show', error);
  });
};


componentDidMount() {
  console.log('mounted')
  this.fetchUser();
  this.fetchFollower();

}

  render(){
    console.log(this.state.user)

  return (
    <div className="App">
        GitHub Cards
    <UserCard 
    img={this.state.user.avatar_url}
    name={this.state.user.login}
    location={this.state.user.location}
    bio={this.state.user.bio}
    url={this.state.user.html_url}
    />
    <div>
      <h1>Followers</h1>
      <div className="followers">
        {this.state.followers.map(user => {
          return (
            <FollowerCard
            img={user.avatar_url}
            name={user.login}
            url={user.html_url}
            />
          )
        })}
      </div>
    </div>
    </div>
  );
}
}
export default App;