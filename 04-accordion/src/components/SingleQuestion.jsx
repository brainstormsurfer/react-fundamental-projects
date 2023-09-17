import React from "react";

const SingleQuestion = ({ id, title, info, isShow, showAnswer }) => {
  return (
    <>
      <div className="question">
        <header>
          <h5>{title}</h5>
          <button onClick={() => showAnswer(id)} className="question-btn">
            {isShow ? "-" : "+"}
          </button>
        </header>
        {isShow && <p>{info}</p>}
      </div>
    </>
  );
};

export default SingleQuestion;
