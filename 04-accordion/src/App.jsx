import { useState, useEffect } from "react";
import data from "./data";
import SingleQuestion from './components/SingleQuestion';

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
    const updatedQuestions = questions.map((question) => {
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
        {
          questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} showAnswer={showAnswer}/>
         })
      }
      </div>
    </main>
  );
};

export default App;
