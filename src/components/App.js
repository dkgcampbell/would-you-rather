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
    const { authedUser } = this.props;

    console.log(authedUser)

    if (!authedUser) {
      return <LogIn />;
    }

    return (
      <Router>
        <div>
          <div>
            Would You Rather... ?
          </div>
          <span>Hi {authedUser}</span>
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

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(App);
