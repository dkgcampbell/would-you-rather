import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
  };

  render() {
    const { question } = this.props;

    return (
      <div>
        <h3>Would you rather...</h3>
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
      </div>
    );
  }
}

export default Question
