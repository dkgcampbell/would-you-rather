import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';
import Question from './Question';

class QuestionPage extends Component {
  render() {
    const { authedUserId, question, user } = this.props;

    if (!authedUserId) {
      return <LogIn />;
    }

    if (question === null) {
      return (<div>Question not found</div>)
    }

    return (
      <div>
        <h3>Would you rather...</h3>
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
        <img src={user.avatarURL} width='50' height='50' alt={user.name} />
      </div>
    );
  }
};

const mapStateToProps = ({ authedUserId, users, questions }, props) => {
  const { question_id } = props.match.params
  const allQuestionsArray = Object.keys(questions).map(index => questions[index])
  const questionArray = allQuestionsArray.filter(q => q.id === question_id)
  const question = questionArray[0]

  const allUsersArray = Object.keys(users).map(userId => users[userId])
  const user = question 
    ? allUsersArray.filter(u => u.id === question.author)[0]
    : null

  return {
    authedUserId,
    question: question ? question : null,
    user: user ? user : null
  }
};

export default connect(mapStateToProps)(QuestionPage);