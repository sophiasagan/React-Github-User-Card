import React, { Component } from 'react'

 class FollowerCard extends Component {
    render() {
        return (
            <div className="followersCard">
                <img src={this.props.img} alt="avatar"/>
                <h2>{this.props.name}</h2>
                <p>{this.props.url}</p>
            </div>
        )
    }
}

export default FollowerCard;