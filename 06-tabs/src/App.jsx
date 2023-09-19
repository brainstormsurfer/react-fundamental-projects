import { useState, useEffect } from "react";
import JobInfo from "./components/JobInfo";
import Loading from "./components/Loading";
import BtnContainer from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentItem]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => (
              <BtnContainer
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                company={job.company}
                index={index}
              />
            ))}
          </div>

          <JobInfo
            jobs={jobs}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </section>
      )}
    </main>
  );
};

export default App;
