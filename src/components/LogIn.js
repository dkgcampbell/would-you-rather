import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const handleClick = (userId, dispatch) => {
  dispatch(setAuthedUser(userId));
};

const LogIn = ({ users, dispatch }) => {
  return (
    <div>
      <h2>Please select a user to log in as:</h2>
      <ul>
        {Object.keys(users).map(userId => (
          <div key={users[userId].id}>
            <div onClick={e => handleClick(users[userId].id, dispatch)}>
              <img src={users[userId].avatarURL} width='50' height='50' alt={users[userId.name]} />
              <span>{users[userId].name}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps)(LogIn);