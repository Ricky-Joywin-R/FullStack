import PropTypes from'prop-types'

import React from 'react'
import Navbar from '../../components/Navbar';
const UserLayout = ({children}) => {
  return (
    <div className="user_container">
   <Navbar/>
    <main>
      {children}
    </main>
    <footer>
    
    </footer>
    </div>
  )
}
UserLayout.propTypes={
  children:PropTypes.node.isRequired
}

export default UserLayout