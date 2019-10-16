import { Link } from 'react-router-dom';
import React from 'react';

const QuizIndexItem = ({quiz}) => {
  return (
          <Link to={`/admin/quiz/${quiz.id}`}>
            <h3>{quiz.name}</h3>
          </Link>
          )
}

export default QuizIndexItem;

