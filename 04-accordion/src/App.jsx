import { useState, useEffect } from "react";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState([]);

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
    const updatedQuestions = questions.map((question, index) => {
      if (question.id === index + 1 && question.isShow === true) {
        return {
          ...question,
          isShow: false,
        };
      } else {
        if (question.id === id) {
          return {
            ...question,
            isShow: true,
          };
        } else {
          return {
            ...question,
            isShow: false,
          };
        }
      }
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
            <SingleQuestion
              key={question.id}
              {...question}
              showAnswer={showAnswer}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
