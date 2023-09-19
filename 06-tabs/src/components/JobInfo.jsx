import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, title, duties } = jobs[currentItem];
  return (
    <article>
      <h3 className="title">{title}</h3>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
