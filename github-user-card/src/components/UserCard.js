import React, { Component } from 'react'

 class UserCard extends Component {
    render() {
        return (
            <div className="userCard">
                <img src={this.props.img} alt="avatar"/>
                <h2>{this.props.name}</h2>
                <p>{this.props.location}</p>
                <p>{this.props.bio}</p>
                <p>{this.props.url}</p>
            </div>
        )
    }
}

export default UserCard;