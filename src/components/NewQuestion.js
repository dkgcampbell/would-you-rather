import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

const NewQuestion = ({ authedUserId }) => {
  if (!authedUserId) {
    return <LogIn />;
  }

  return (
    <div>
      NewQuestion
    </div>
  );
};

const mapStateToProps = ({ authedUserId }) => ({
  authedUserId
});

export default connect(mapStateToProps)(NewQuestion);