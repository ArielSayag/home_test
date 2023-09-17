
import { useState } from 'react';

import './App.css';
import Dropdown from './Components/Dropdown';
function App() {

  const [formData,setFormData]=useState({email:"",password:"",serverAddress:"",serverPath:"",port:"",isSSL:""})
  const {email,password,serverAddress,serverPath,port,isSSL}=formData;
  const [isAdvanced,setIsAdvanced]=useState(false);

  const [isChecked,setIsChecked] = useState(false);

  const handleClickSSl = () =>{
    setIsChecked((current) => !current);

    setFormData((current)=>({
      ...current,
      "isSSL":isChecked
    }))

    
 
  }

  const handleOptionClick=(option)=>{
    if(option==='Manual'){
      setIsAdvanced(false)
    }
    else setIsAdvanced(true);
  }

  const handleChange=(e)=>{

      setFormData((current)=>({
        ...current,
        [e.target.id]:e.target.value
      }))
   
  }

  const handleSignInSubmit=(e)=>{
    e.preventDefault();
    //validation
    console.log(formData)
    if(!isValidEmail(email)){
      alert('Invalid email address')
    }
    else if(serverAddress!=="" || isAdvanced && ( serverPath !=="" || !isValidPort(port))){
      alert('required valid  server-address,server-path and port')
    }
    else{
      if(isAdvanced){
        alert(`
        mail:${email},
        password:${password},
        server address:${serverAddress},
        server path:${serverPath},
        port:${port},
        isSSL:${isSSL}
      `)
      }
      else{
        alert(`
          mail:${email},
          password:${password},
          server address:${serverAddress}
        `)

      }
    }

  }

  function isValidEmail(email) {
    // Regular expression pattern for a valid email address
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Test the email against the pattern
    return pattern.test(email);
  }
  
  function isValidPort(port) {
    // Parse the port to ensure it's a valid integer
    const parsedPort = parseInt(port, 10);
  
    // Check if the parsed port is a whole number and within the valid range
    return Number.isInteger(parsedPort) && parsedPort >= 0 && parsedPort <= 65535;
  }


  return (
    <div style={{marginLeft:'50px',marginTop:'50px'}}>
      <form onSubmit={handleSignInSubmit}>
        
        <div className='headLine' >
          <p className='headLineText'>Account Type:</p>
          <Dropdown onChange={handleOptionClick}/>
        </div>

        <div className='headLine'>
          <p className='headLineText'>user Name:</p>
          <input required type='email' id="email" value={email} placeholder='name@example.com' onChange={handleChange}/>
        </div>

        <div className='headLine'>
          <p className='headLineText'>Password</p>
          <input required type='password' id="password" value={password} placeholder='Password' onChange={handleChange}></input>
        </div>

        <div className='headLine'>
          <p className='headLineText'>Server address</p>
          <input required type='text' id="serverAddress" value={serverAddress} placeholder='example.com' onChange={handleChange}></input>
        </div>

        {isAdvanced &&
        <div>
           <div className='headLine'>
          <p className='headLineText'>Server Path</p>
          <input  type='text' id="serverPath" value={serverPath} placeholder='/calendars/user/' onChange={handleChange}></input>
        </div>

        <div className='headLine'>
          <p className='headLineText'>port</p>
          <input style={{width:'30px',marginRight:'30px'}} type='text' id="port" value={port}  onChange={handleChange}></input>
        
          {/* <input style={{backgroundColor:'orange'}}  type='checkbox' id="isSSL" value={isChecked} checked={isChecked} onClick={handleClickSSl} onChange={handleChange}></input> */}
          <div class="custom-checkbox">
            <input type="checkbox" id='isSSL' value={isChecked} checked={isChecked} />
            <label for="isSSL"  onClick={handleClickSSl}></label>
          </div>
          <p style={{fontSize:'10px',marginRight:'10px'}}>is SSL</p>
        </div>
        </div>}

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
