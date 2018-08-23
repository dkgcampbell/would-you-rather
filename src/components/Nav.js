import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
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
  )
}