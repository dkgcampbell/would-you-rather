import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

class Leaderboard extends Component {
  renderUsers = (users) => {
    const allUsersArray = Object.keys(users).map(userId => users[userId])

    return (
      <ol>
        {allUsersArray.map(user => (
          <li key={user.id}>
            <div><strong>{user.name}</strong></div>
            <img src={user.avatarURL} width='50' height='50' alt={user.name} />
            <div>{user.questions.length} questions asked</div>
            <div>{Object.keys(user.answers).length} questions answered</div>
          </li>
        ))}
      </ol>
    )
  }

  render() {
    const { authedUserId, users } = this.props;
    if (!authedUserId) {
      return <LogIn />;
    }

    return (
      <div>
        <h2>Leaderboard</h2>
        {this.renderUsers(users)}
      </div>
    );
  }
};

const mapStateToProps = ({ authedUserId, users }) => ({
  authedUserId,
  users
});

export default connect(mapStateToProps)(Leaderboard);