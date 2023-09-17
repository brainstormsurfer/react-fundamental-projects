import { useState, useEffect } from "react";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (data)  {
      const questions = data.map((question) => {
        return {
          ...question,
          isShow: false
        }
      })
    }  
    setQuestions(data);
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return (
            <div className="question" key={question.id}>
              <header>
              <h5>{question.title}</h5>
              <button className="question-btn">{isShow ? "-" : "+"}</button>
              </header>
              {
                isShow && <p>{question.info}</p>
              }
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
