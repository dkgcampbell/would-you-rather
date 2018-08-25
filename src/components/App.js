import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LogIn from './LogIn'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { authedUserId, users } = this.props;

    console.log('<App> authedUserId: ', authedUserId)

    if (!authedUserId) {
      return <LogIn />;
    }

    return (
      <Router>
        <div>
          <h1>Would You Rather... ?</h1>
          <span>Hi {users[authedUserId].name}</span>
          <Nav />
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add' component={NewQuestion} />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUserId, users }) => {
  return {
    authedUserId,
    users
  };
};

export default connect(mapStateToProps)(App);
