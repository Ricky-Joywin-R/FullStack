import React from 'react'
import propTypes from 'prop-types';

const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
    <aside></aside>
    <main>
    {children}
    </main>
    </div>
  )
}
AdminLayout.propTypes={
  children:propTypes.node.isRequired
}

export default AdminLayout