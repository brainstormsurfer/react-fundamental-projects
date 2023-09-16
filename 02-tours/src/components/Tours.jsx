import Tour from "./Tour"

const Tours = ({tours, removeTour}) => {

    return (
    <ul className="tours">
        {        
        tours.map((tour) => <Tour key={tour.id} {...tour} removeTour={removeTour} />) 
        }
    </ul>
  )
}

export default Tours 