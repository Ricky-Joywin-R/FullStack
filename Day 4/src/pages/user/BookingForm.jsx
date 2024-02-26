import React from 'react'
import '../../assets/css/booking.css'
const BookingForm = () => {
  return (
    <div classname='background'>
    <div className='bk_box'>
    <h1>Book Your Event</h1>
    <div className='bk_form_box'>
    <form>
    <div className='bk_txt'>
    <p>Name</p>
    <input type='text' name='Name' required autoComplete='off'/>
    </div>
    <div className='bk_txt'>
    <p>Submission Date</p>
    <input type='date' required/>
    </div>
    <div className='bk_txt'>
    <p>Event Type</p>
    <select required>
    <option value='0'>Event Type</option>
    <option value='1'>Wedding</option>
    <option value='2'>Birthday</option>
    <option value='3'>Baby Shower</option>
    <option value='4'>Friends Reunion</option>
    </select>
    </div>
    <div className='bk_txt'>
    <p>Event Date</p>
    <input type='date' required/>
    </div>
    <div className='bk_txt'>
    <p>Head Count</p>
    <input type='number' required/>
    </div>
    <button type='submit' className='bk_button'> Add Booking</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default BookingForm