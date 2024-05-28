import React from 'react';
import { useState } from 'react';

export function UserView(props) {
    console.log("UserView props: ", props);
  return (
    <div className='user-view-article'>
      <header className='user-view-header'>
        <img
          className='user-view-avatar'
          alt='user avatar'
          src={`https://unavatar.io/${props.userHandle}`}
        />
        <div className='user-view-userNameContainer'>
          <h1 className='user-view-userName'>{props.userName}</h1>
          <h3 className='user-view-userHandle'>@{props.userHandle}</h3>
        </div>
      </header>
    </div>
  );
}


export default UserView;