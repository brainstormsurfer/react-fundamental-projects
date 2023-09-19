import {BiChevronsRight} from 'react-icons/bi'
import {v4 as uuidv4} from 'uuid'

const Duties = ({duties}) => {
  return (
    <div>
        {

            duties.map((duty) => 
            <div key={uuidv4()}  >
                    <BiChevronsRight className='job-icon'/>    
                <p className="job-desc">
                    {duty}                
                </p>
            </div>
            )
        }
    </div>
  )
}

export default Duties