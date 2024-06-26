import React from 'react';

import './UserView.css';  

export default function UserView({userName, userAvatar}) {

  let userNameString = "Nombre de usuario";

  if(userName){
    userNameString = userName;
  }

  return (
    <div className='user-view-article'>
        <img
          className='user-view-avatar'
          src={`https://unavatar.io/${userAvatar}`}
        />
        <div className='user-view-userNameContainer'>
          <h1 className='user-view-userName'>{userNameString}</h1>
          <h3 className='user-view-userHandle'>@{userAvatar}</h3>
        </div>
    </div>
  );
}