import Title from "./Title"
import { toursData } from "../data"
import Tour from "./Tour"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title={"featured"} subTitle={"tours"} />
      </div>

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
