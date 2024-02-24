import '../../assets/css/editprofile.css';
import profile_pc from '../../assets/images/man.png';
import React from 'react'

const EditProfile = () => {
  return (
    <div>
    <main>
    <div className='edit_box'>
    <img src={profile_pc} className='profile_pic' alt=''/>
    <div className='form_box'>
    <form>
    <div className="ed_txt">
    <p>Name</p>
    <input type='text' name='Name' placeholder='Ricky Joywin R' autoComplete='off' />
    </div>
    <div className='ed_txt'>
    <p>Email</p> 
    <input type='email' name='email' placeholder='rickyjoywin@gmail.com' autoComplete='off'/>
    </div>
    <div  className='ed_txt'>
    <p>Mobile</p>
    <input type='tel' name='mobile' placeholder='7598833000' autoComplete='off'/>
    </div>
    <button type='submit' className='ed_button'>Edit</button>
    </form>
    </div>
    </div>
    </main>
    </div>
  )
}

export default EditProfile