import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";


const App = () => {
  const [people, setPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await import("./data.js");
      if (!response) {
        console.log("some fetching error");
      }
      const data = response.default;
      console.log("data", data)
      if (data) {
      setPeople(data);
      }
      console.log("currentIndex3" , currentIndex)

    };

    fetchData();        
  }, [currentIndex]);

  const onPrevOrNextClickHandler = (e) => {

    let target = e.target;
    
    // approaching the button while clicking might be either of the following :
    // svg-container (child of button) / svg-path (grandchild)
    while (target && !target.getAttribute("data-direction")) {
      target = target.parentElement;
    }

    if (target) {
      const direction = target.getAttribute("data-direction");

      if (direction === "prev") {        
        if (currentIndex === 0) {
          setCurrentIndex(prev => prev = people.length-1)  
        }
      else {
        setCurrentIndex(prev => prev-1)
      }
    }

      if (direction === "next") {
        if (currentIndex + 1 === people.length) {
          // setCurrentPerson(people[0])
          setCurrentIndex(prev => prev = 0)  
        }
      else {
        // setCurrentPerson(people[currentIndex + 1])
        setCurrentIndex(prev => prev + 1)
      }
    }
    
    console.log("currentIndex3" , currentIndex)

     }
  }

  return (
    <div className="main">
      <div className="review">
        <div className="img-container">
          <img className="person-img"
            src={people[currentIndex]?.image}
            alt={people[currentIndex]?.name}
          />
          <FaQuoteRight className="quote-icon" />
        </div>
        <h4 className="author">{people[currentIndex]?.name}</h4>
        <h5 className="job text">{people[currentIndex]?.job}</h5>
        <p className="info">{people[currentIndex]?.text}</p>
        <div className="btn-container">
          <button
            onClick={onPrevOrNextClickHandler}
            className="prev-btn"
            data-direction="prev"
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={onPrevOrNextClickHandler}
            className="next-btn"
            data-direction="next"
          >
            <BiChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster">Surprise Me</button>
      </div>
    </div>
  );
};

export default App;