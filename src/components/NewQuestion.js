import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LogIn from './LogIn';
import { handleAddQuestion } from '../actions/shared';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = (e, option) => {
    const text = e.target.value

    if (option === 'optionOne') {
      this.setState({
        optionOneText: text
      });
    } else if (option === 'optionTwo') {
      this.setState({
        optionTwoText: text
      });
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state;
    const { authedUserId, dispatch } = this.props;
    const question = {
      optionOneText,
      optionTwoText,
      author: authedUserId
    };

    dispatch(handleAddQuestion(question))

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { authedUserId } = this.props;
    if (!authedUserId) {
      return <LogIn />;
    }

    const { optionOneText, optionTwoText, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h2>Would you rather</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              placeholder='Option One'
              name='optionOne'
              type='text'
              value={optionOneText}
              onChange={(e) =>this.handleChange(e, 'optionOne')}
            />
          </div>
          <div>
            <input 
              placeholder='Option Two'
              name='optionTwo'
              type='text'
              value={optionTwoText}
              onChange={(e) =>this.handleChange(e, 'optionTwo')}
            />
          </div>
          <div>
            <button disabled={!(optionOneText && optionTwoText)}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = ({ authedUserId }) => ({
  authedUserId
});

export default connect(mapStateToProps)(NewQuestion);