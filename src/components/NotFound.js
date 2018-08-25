import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

const NotFound = ({ authedUserId }) => {
  if (!authedUserId) {
    return <LogIn />;
  }

  return (
    <div>
      You ask for what does not exist.
    </div>
  );
};

const mapStateToProps = ({ authedUserId }) => ({
  authedUserId
});

export default connect(mapStateToProps)(NotFound);