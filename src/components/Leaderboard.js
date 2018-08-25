import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

const Leaderboard = ({ authedUserId, users }) => {
  if (!authedUserId) {
    return <LogIn />;
  }

  return (
    <div>
      Leaderboard
    </div>
  );
};

const mapStateToProps = ({ authedUserId, users }) => ({
  authedUserId,
  users
});

export default connect(mapStateToProps)(Leaderboard);