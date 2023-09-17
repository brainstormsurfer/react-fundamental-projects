import { useState, useEffect } from "react";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState([]);
  // const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (data) {
      setQuestions(
        data.map((question) => {
          return {
            ...question,
            isShow: false,
          };
        })
      );
    }
  }, []);

  const showAnswer = (id) => {
    const updatedQuestions = questions.map((question) => {
      // questions.find((question) => {
      if (question.id === id) {
        return {
          ...question,
          isShow: !question.isShow,
        }
      }
      return question
    });

    if (updatedQuestions) {
      setQuestions(updatedQuestions);
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return (
            <div className="question" key={question.id}>
              <header>
                <h5>{question.title}</h5>
                <button
                  onClick={() => showAnswer(question.id)}
                  className="question-btn"
                >
                  {question.isShow ? "-" : "+"}
                </button>
              </header>
              { question.isShow && <p>{question.info}</p>}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
