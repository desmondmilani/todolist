import React from 'react';
import "./UserPanel.css";

const UserPanel = ({user, logout}) => {
  return (
    <div className='UserPanel'>
        <h1>{user.displayName}</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserPanel
