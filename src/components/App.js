import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LogIn from './LogIn'

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
      <div>
        Would You Rather... ?
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(App);
