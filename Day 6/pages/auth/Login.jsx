import '../../assets/css/login.css'; 
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function Login(){
 return(
  <div className='summa'>
   <div className="L_page">
     <div className="c">
     <h1> Login</h1>
     <form >
     <div className="text_field">
     <input type="email" name="e-mail"   required></input>
     <span></span>
     <label>Email</label>
     <div className='icon'>
     <HiOutlineMail />
     </div>
     
     </div>
     <div className="text_field">
     <input type="password"  required ></input>
     <span></span>
     <label>Password</label>
     <div className='icon'>
     <FaLock />
     </div>
     </div>
     <div className="pass">Forgot Password?</div>
     <div className="L_button">
     <button type="submit" >Login</button>
     </div>
     <div className="signup_link">
     Not a member? <Link to="/eventhub/signup">SignUp</Link>
     </div>
     </form>
     </div>
     </div> 
     </div>
     );
   }
export default Login;