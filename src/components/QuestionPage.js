import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';

class QuestionPage extends Component {
  renderVotes = (option) => {
    const { totalUsers } = this.props
    const votes = option ? option.votes.length : 0
    const percentageVote = (totalUsers > 0 ? votes / totalUsers * 100 : 0).toFixed(2)
    if (votes === 1) {
      return `(1 vote, ${percentageVote}%)`
    }

    if (votes > 1) {
      return `(${option.votes.length} votes, ${percentageVote}%)`
    }

    return ''
  }

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
        <div>{question.optionOne.text} {this.renderVotes(question.optionOne)}</div>
        <div>{question.optionTwo.text} {this.renderVotes(question.optionTwo)}</div>
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
    user: user ? user : null,
    totalUsers: Object.keys(users).length
  }
};

export default connect(mapStateToProps)(QuestionPage);