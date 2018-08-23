import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

const Dashboard = ({ authedUser, users }) => {
  if (!authedUser) {
    return <LogIn />;
  }

  return (
    <div>
      Dashboard
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users
});

export default connect(mapStateToProps)(Dashboard);