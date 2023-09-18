import {useState, useEffect} from "react";
import questions from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  useEffect(() => {
    setSelectedQuestion(null);
  }, []);

  const selectQuestionHandler = (index) => {
      setSelectedQuestion((prev) => 
          prev === index ? null : index
      )    
    }

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.length > 0 && questions.map((question, index) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              index={index}
              selectedQuestion={selectedQuestion}
              selectQuestionHandler={() => selectQuestionHandler(index)}
            />
          );
        })}
      </div>
    </main>
  );
}


export default App;
