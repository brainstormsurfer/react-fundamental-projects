import { useState } from "react"

const Tour = ({image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)    

  return (
    <div>        
    <li className="single-tour">
        <img className="img" src={image} alt={name} />    
        <h5 className="title">{name}</h5>
        <p className="tour-price">{price}</p>
        { readMore ?
            <p style={{height: "fit-content", overflow: "none"}}className="tour-info">{info}</p> :
            <p className="tour-info">{info}</p>
        }
        <button className="btn info-btn" onClick={() => setReadMore(!readMore)}>
        {readMore ? "Minimize"  : "Read More..." }
        </button>
    </li>
        <button className="btn btn-block delete-btn" onClick={removeTour}>Remove</button>
    </div>
  )
}

export default Tour