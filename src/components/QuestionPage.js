import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

class QuestionPage extends Component {
  renderVotes = (option) => {
    const { totalUsers, questionAnswered } = this.props

    if (questionAnswered) {
      const votes = option ? option.votes.length : 0
      const percentageVote = (totalUsers > 0 ? votes / totalUsers * 100 : 0).toFixed(2)
      if (votes === 1) {
        return `(1 vote, ${percentageVote}%)`
      }

      if (votes > 1) {
        return `(${option.votes.length} votes, ${percentageVote}%)`
      }
    }

    return ''
  }

  render() {
    const { authedUserId, question, user, questionAnswered } = this.props;

    if (!authedUserId) {
      return <LogIn />;
    }

    if (question === null) {
      return (<div>Question not found</div>)
    }

    return (
      <div>
        <h3>Would you rather...</h3>
        <div>{questionAnswered === 'optionOne' ? <strong>{question.optionOne.text}</strong> : question.optionOne.text} {this.renderVotes(question.optionOne)}</div>
        <div>{questionAnswered === 'optionTwo' ? <strong>{question.optionTwo.text}</strong> : question.optionTwo.text} {this.renderVotes(question.optionTwo)}</div>
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

  const authedUser = allUsersArray.filter(user => user.id === authedUserId)[0]
  console.log(authedUser.answers[question.id])
  const questionAnswered = authedUser.answers[question.id]

  return {
    authedUserId,
    question: question ? question : null,
    user: user ? user : null,
    questionAnswered,
    totalUsers: Object.keys(users).length
  }
};

export default connect(mapStateToProps)(QuestionPage);