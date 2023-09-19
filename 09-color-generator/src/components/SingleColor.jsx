const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  return (
    <div className="container">
      <div className="container" style={{ backgroundColor:`#${hex}`}}>
        <p>{weight}</p>
        <p>`#${hex}`</p>
      </div>
    </div>
  );
};

export default SingleColor;
