import React from 'react';

export function UserView({ userName, userHandle }) {
  return (
    <div className='user-view-article'>
      <header className='user-view-header'>
        <img
          className='user-view-avatar'
          alt='user avatar'
          src={`https://unavatar.io/${userHandle}`}
        />
        <div className='user-view-userNameContainer'>
          <h1 className='user-view-userName'>{userName}</h1>
          <h3 className='user-view-userHandle'>@{userHandle}</h3>
        </div>
      </header>
    </div>
  );
}


export default UserView;