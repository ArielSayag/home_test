import '../style/dropdown.css';
import React, { useState } from 'react'
import {HiChevronUpDown} from 'react-icons/hi2';

function Dropdown({onChange}) {

  const [selection,setSelection]=useState('');
  const [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    setIsOpen((current)=>!current);
  }
  const handleClickOption=(option)=>{
    setSelection(option);
    onChange(option)
  }
  return (
   
    <div className='mainDropDown' onClick={handleClick}>
      <div className='headDrop'>
        <HiChevronUpDown style={{color:'white',backgroundColor:'#FF4500',borderRadius:'2px',float:'right',fontSize:'14px'}} />
        {selection==="" ? <p className='placeholder'>Account Type</p>: <p>
          {selection}
        </p>}
        
      </div>
      {isOpen &&   
        <div className="mainOption">
          <p onClick={()=>handleClickOption('Advanced')}>Advanced</p>
          <p onClick={()=>handleClickOption('Manual')}>Manual</p>
        </div>
      }
    </div>
  )
}

export default Dropdown