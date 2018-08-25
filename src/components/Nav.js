import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';

class Nav extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(unsetAuthedUser());
  };
  
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Questions
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              Create New Poll
            </NavLink>
          </li>
        </ul>
        <button onClick={this.handleClick}>Log Out</button>
      </nav>
    );
  }
}

export default connect()(Nav)
