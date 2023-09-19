const BtnContainer = ({ currentItem, setCurrentItem, company, index }) => {
  return (
      <button
        onClick={() => setCurrentItem(index)}
        className={index === currentItem ? "active-btn job-btn" : "job-btn"}>    
        {company}
      </button>
  );
};

export default BtnContainer;
