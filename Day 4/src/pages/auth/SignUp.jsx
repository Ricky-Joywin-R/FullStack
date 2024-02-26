import '../../assets/css/signup.css';
import { useState} from 'react';
import { FaUser } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import {Link} from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { caseSuccess } from './UseSlice';
// import { useDispatch } from 'react-redux';
function SignUp(){
 return(
  <div className="summa1">
  <div className='S_page'>
  <div className='center'>
  <h1>SignUp</h1>
  <form>
  <div className='txt_field'>
  <input type='text' name='Name' required></input>
  <span></span>
  <div className='l_icon'>
  <FaUser />
  </div>
  <label>Name</label>
  </div>
  <div className='txt_field'>
  <input type='email' name='Email' required/>
  <span></span>
  <label>Email</label>
   <div className='l_icon'>
   <MdOutlineMail />
   </div>
  </div>
  <div className='txt_field'>
  <input type='tel' name='phone' required/>
  <span></span>
  <div className='l_icon'>
  <FaMobileAlt />
  </div>
  <label>Mobile</label>
  </div>
  <div className='txt_field'>
  <input type='password' name='pass' required/>
  <span></span>
  <label>Password</label>
  <div className='l_icon'>
     <FaLock />
     </div>
  </div>
  <div className="S_button">
  <button type='submit'>SignUp</button>
  </div>
  <div className='login_link'>
  Already a member? <Link to='/eventhub/login'>Login</Link>
  </div>
  </form>
  </div>
  </div>
  </div>
 )
}
export default SignUp;