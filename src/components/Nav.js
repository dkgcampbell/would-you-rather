import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
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
      </nav>
    );
  }
}

export default Nav
