import React, { useState } from 'react'

function Inputdetails(props) {
    const [name,setname]= useState('');
    const [age,setage]= useState(18);
    const handlename = (e)=>{
        setname(e.target.value);
    }

    const ageselect = (e)=>{
        const selectedage =e.target.value; 
        setage(selectedage);
        props.actions.handleageSubmit(age);
    }
    const submitname =(e)=>{
        e.preventDefault();
        props.actions.handlenamesubmit(name);
    }
  return (
    <div>
    {(props.name==="name") && <form action="" onSubmit={submitname}>
      <label htmlFor="name">
        <input type="text" name="" id="inputname" onChange={handlename} autoFocus={true} />
      </label>
    </form>}

    {(props.name==="age") && <label htmlFor="age">
      <select id="age" onChange={ageselect} className='ageselection'>
        {
            Array.from( {length:23},(i,index)=>{
                const age = index + 18;
                return <option key={age} value={age} className='ageoption'>{age}</option>;
            } )
        }
        </select>
      </label>}

      
    </div>
  )
}

export default Inputdetails
