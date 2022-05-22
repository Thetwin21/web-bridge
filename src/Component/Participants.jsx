import React, { useState } from 'react'

const Participants = () => {
   const [interation , setIteration ] = useState(0)
   const [numberofTask , setNumberofTask ] = useState()
   const [participants, setParticipants] = useState([])

    
    const handleClick = (e) => {
       setIteration(prevIteration => {
           return parseInt(prevIteration) * (numberofTask.length)
       }  )
    }
    const onChange = (e) => {
        setIteration(e.target.value)
    }
    const numTask = (e) => {
        setIteration(e.target.value)
    }


    return (
        <div>

            <label htmlFor="numOfIteration">Enter Number Of Iteration</label>
            <input type="text" onChange={onChange} id='numOfIteration' className="value" />
            <label htmlFor="numOfIteration">Enter Number task</label>
            <input type="text" onChange={onChange} id='numOfIteration' className="value" />
            <button onClick={handleClick}>Enter</button>
            <p>{interation}</p>


        </div>
    )
}

export default Participants
