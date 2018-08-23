import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

const Leaderboard = ({ authedUser, users }) => {
  if (!authedUser) {
    return <LogIn />;
  }

  return (
    <div>
      Leaderboard
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users
});

export default connect(mapStateToProps)(Leaderboard);