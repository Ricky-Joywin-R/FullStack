import React, { lazy} from 'react';
import {Navigate,Route,Routes} from 'react-router-dom';
import './assets/css/index.css';
import LazyLayout from './components/LazyLayout';
import UserLayout from './pages/user/UserLayout'
const LazyLogin = lazy(()=>import('./pages/auth/Login'));
const LazyRegister = lazy(()=>import('./pages/auth/SignUp'));
const LazyHome = lazy(()=>import('./pages/user/Home'));
const LazyEditProfile = lazy(()=>import('./pages/user/EditProfile'));
const LazyEvent = lazy(()=>import('./pages/user/Event'));
import Login from './pages/auth/Login';
import SignUp from'./pages/auth/SignUp';
const LazyBooking = lazy(()=>import('./pages/user/BookingForm'));
const LazySuccessfullBooking = lazy(()=>import('./pages/user/BookingSuccessful'))
const UserRoutes= () => {
  return(
    <UserLayout>
    <Routes>
  <Route path='/home' element={<LazyLayout component={LazyHome}/>}/>
  <Route path='/booking'element={<LazyLayout component={LazyBooking}/>}/>
  <Route path='/event'element={<LazyLayout component={LazyEvent}/>}/>
  <Route path='/edit_profile'element={<LazyLayout component={LazyEditProfile}/>}/>
  <Route path='/booking_successfull'element={<LazyLayout component={LazySuccessfullBooking}/>}/>
    </Routes>
    </UserLayout>
  )
}
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to='/eventhub/login'/>}/>
    <Route  path="/eventhub/login" element={<LazyLayout component={LazyLogin}/>}/>
    <Route path='/eventhub/signup' element={<LazyLayout component={LazyRegister}/>}/>
    <Route path='eventhub/booking' element={<LazyLayout component={LazyBooking}/>}/>
    <Route path="/eventhub/user/*" element={<UserRoutes/>}/>
    </Routes>
  
    
  )
}

export default App