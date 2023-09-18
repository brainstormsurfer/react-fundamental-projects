import React from "react";

const SingleQuestion = ({ title, info, selectQuestionHandler, index, selectedQuestion }) => {
  return (
    <>
      <div className="question">
        <header>
          <h5>{title}</h5>
          <button onClick={selectQuestionHandler} className="question-btn">
            {index === selectedQuestion ? "-" : "+"}
          </button>
        </header>
        {index === selectedQuestion && <p>{info}</p>}
      </div>
    </>
  );
};

export default SingleQuestion;
