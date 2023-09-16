import { useState } from "react"

const Tour = ({image, info, name, price}) => {
    const [ReadMore, RetreadMore] = useState(false)
  return (
    <div>        
    <li className="single-tour title">
        <h5 className="tour-info">{name}</h5>
        <img className="single-tour img" src={image} alt={name} />    
        <p className="single-tour tour-price">{price}</p>
        <p className="tour-info">{info}</p>
        {/* <div className="btn btn-block"> */}
        <button className="btn info-btn">Read More</button>
    </li>
        {/* </div> */}
        <button className="btn delete-btn">Remove</button>
    </div>
  )
}

export default Tour