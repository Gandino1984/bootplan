// import { useState } from 'react'

import './UserView.css'

export function UserView() {
    return(
        <div className='user-view-article'>
           <header className='user-view-header'>
                <img className='user-view-avatar' src='https://unavatar.io/germanandino' alt="user avatar" />
                <div className='user-view-userNameContainer'>
                    <h1 className='user-view-userName'>German Andino</h1>
                    <h3 className='user-view-userHandle'>@germanandino</h3>
                </div>
           </header>
        </div>
    )
}

export default UserView
