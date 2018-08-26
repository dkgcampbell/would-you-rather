import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';
import { handleAddQuestionAnswer } from '../actions/shared';

class QuestionPage extends Component {
  state = {
    questionAnswered: this.props.questionAnswered
  }

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

  vote = (e, option) => {
    e.preventDefault()
    const { dispatch, authedUserId, question } = this.props
    dispatch(handleAddQuestionAnswer({ authedUser: authedUserId, qid: question.id, answer: option }));
    this.setState({
      questionAnswered: option
    })
  }

  renderAnsweredQuestion = (question, questionAnswered) => {
    return (
      <div>
        <div>{questionAnswered === 'optionOne' ? <strong>{question.optionOne.text}</strong> : question.optionOne.text} {this.renderVotes(question.optionOne)}</div>
        <div>{questionAnswered === 'optionTwo' ? <strong>{question.optionTwo.text}</strong> : question.optionTwo.text} {this.renderVotes(question.optionTwo)}</div>
      </div>
    )
  }

  renderUnansweredQuestion = (question) => {
    return (
      <div>
        <div>
          <button onClick={(e) => this.vote(e, 'optionOne')} >{question.optionOne.text}</button>
        </div>
        <div>
          <button onClick={(e) => this.vote(e, 'optionTwo')} >{question.optionTwo.text}</button>
        </div>
      </div>
    )
  }

  render() {
    const { questionAnswered } = this.state;
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
        {questionAnswered
          ? this.renderAnsweredQuestion(question, questionAnswered)
          : this.renderUnansweredQuestion(question)
        }
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