import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';
import Question from './Question';

class Dashboard extends Component {
  state = {
    displayAnswered: false
  }

  toggleQuestions = () => {
    this.setState({
      displayAnswered: !this.state.displayAnswered
    });
  }

  renderQuestions = (questions, noQuestionText) => {
    return (
      <div>
        {questions.length > 0 ? (
          questions.map(question => (
            <Question
              question={question}
              key={question.id}
            />
          ))
        ) : (
          <span>{noQuestionText}</span>
        )}
      </div>
    )
  }

  render() {
    const { displayAnswered } = this.state;
    const { authedUserId, questions, users } = this.props;

    if (!authedUserId) {
      return <LogIn />;
    }

    const allUsersArray = Object.keys(users).map(userId => users[userId])
    const authedUser = allUsersArray.filter(user => user.id === authedUserId)[0]
    const allQuestionsArray = Object.keys(questions).map(index => questions[index])
    const answeredQuestions = allQuestionsArray.filter(question => authedUser.answers[question.id])
    const unansweredQuestions = allQuestionsArray.filter(question => !authedUser.answers[question.id])

    return (
      <div>
        <h2>
          {displayAnswered
            ? `Answered questions`
            : `Unanswered questions`
          }          
        </h2>
        <button
          onClick={this.toggleQuestions}
        >
          {displayAnswered
            ? `Show unanswered questions`
            : `Show answered questions`
          }          
        </button>
        {displayAnswered
          ? this.renderQuestions(answeredQuestions, 'No answered questions.')
          : this.renderQuestions(unansweredQuestions, 'No unanswered questions.')
        }
      </div>
    );
  }
};

const mapStateToProps = ({ authedUserId, users, questions }) => {
  return {
    authedUserId,
    users,
    questions
  }
};

export default connect(mapStateToProps)(Dashboard);