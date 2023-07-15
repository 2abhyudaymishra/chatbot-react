import React from 'react'

function Button(props) {

    const handleonclick =(e)=>{
      e.target.classList.add("tanslateRight")
      
      if(props.name === "Enroll now!"){
        setTimeout(()=>{
          props.actions.handleenrollnow();
        },250)
      }
      else{
        setTimeout(()=>{
          props.actions.handlegotit();
        },250)
      }
    }

  return (
    <div>
      <button className='button1' onClick={handleonclick} >{props.name}</button>
    </div>
  )
}

export default Button
