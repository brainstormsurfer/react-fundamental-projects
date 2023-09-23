import { useState } from "react"

const SingleItem = ({name, completed, removeItem}) => {

  const [complete, setComplete] = useState(completed)
  
  return (
    <div className="single-item">
          <input type="checkbox"                     
          checked={complete} onChange={() => setComplete(!complete)}/>
          <p>{name}</p>
          {/* <input type="checkbox" name="completed" value={completed} onChange={(e) => onChange(setCompleted(!e.target.checked))}/> */}
          <button type="button" className="btn remove-btn" onClick={removeItem}>Delete</button>
    </div>
  )
}

export default SingleItem