import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard';
// import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      searchText: ''
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

handleChanges = e => {
  this.setState({ searchText: e.target.value });
  console.log(e.target.value);
};

componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate running");

  if (prevState.cards !== this.state.cards) {
    console.log("Cards have changed :)");
    }
  }


newUser = e => {
  e.preventDefault();


  fetch(`https://api.github.com/users/${this.state.searchText}`)
    .then(res => res.json())
    .then(cards => this.setState({ user: cards }))
    .catch(err => console.log("No cards :(", err));



  fetch(`https://api.github.com/users/${this.state.searchText}/followers`)
    .then(res => res.json())
    .then(cards => this.setState({ followers: cards }))
    .catch(err => console.log("No cards :(", err));

  
};


  render(){
    console.log(this.state.user)

  return (
    <div className="App">
        GitHub Cards
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleChanges}
        />
        <button onClick={this.newUser}>Search User</button>
    <UserCard 
    img={this.state.user.avatar_url}
    name={this.state.user.login}
    location={this.state.user.location}
    bio={this.state.user.bio}
    url={this.state.user.html_url}
    />
    <div>
      <h1>Followers</h1>
      {/* <SearchForm changeUser={this.changeUser}/> */}
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