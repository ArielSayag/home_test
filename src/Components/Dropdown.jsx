import React, { useState } from 'react'
import {HiChevronUpDown} from 'react-icons/hi2';
import '../style/dropdown.css';

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
   
    <div id='mainDropDown' style={{display:'block',alignItems:'center',height:'20px',width:'200px',border:'1px solid black',position:'relative'}}  onClick={handleClick}>
      <div id='headDrop' style={{fontSize:'10px',marginLeft:'10px',marginTop:'3px'}}>
        {selection}
        <HiChevronUpDown style={{color:'orange',float:'right'}} />
      </div>
      {isOpen &&   
        <div id="mainoption">
          <p   onClick={()=>handleClickOption('Advanced')}>Advanced</p>
          <p  onClick={()=>handleClickOption('Manual')}>Manual</p>
        </div>
      }
    </div>
  )
}

export default Dropdown