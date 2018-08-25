import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
  };

  render() {
    const { question } = this.props;

    return (
      <Link to={`/questions/${question.id}`}>
        <h3>Would you rather...</h3>
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
      </Link>
    );
  }
}

export default Question
