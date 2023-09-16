import Tours from "./components/Tours";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) { 
          console.log("fetching error");
          return;
        }
        const tours = await response.json();
        if (tours) {
          console.log(tours);
          setTours(tours);        
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    const removeTour = (id) => {
        const filteredTours = tours.filter((tourToRemove) => {
            return tourToRemove.id !== id
            // console.log("tourToRemove", tourToRemove.id)
            })

        if (filteredTours) {
          console.log(filteredTours)
          setTours(filteredTours)
        }
    }



  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <h2 className="title-underline"></h2>
      { isLoading ? (
        <Loading />
      ) : (
        <Tours tours={tours} removeTour={removeTour}/>)
      }
    </main>
  );
};

export default App;
