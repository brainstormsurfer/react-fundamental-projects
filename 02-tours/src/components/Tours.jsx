import Tour from "./Tour"

const Tours = ({tours}) => {

    const onRemove = () => {
        
    }

  return (
    <ul className="tours">
        {        
            tours.map((tour) => <Tour key={tour.id} {...tour} />) 
        }
    </ul>
  )
}

export default Tours 