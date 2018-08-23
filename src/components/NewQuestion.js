import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

const NewQuestion = ({ authedUser }) => {
  if (!authedUser) {
    return <LogIn />;
  }

  return (
    <div>
      NewQuestion
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(NewQuestion);