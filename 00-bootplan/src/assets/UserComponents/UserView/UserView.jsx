// import { useState } from 'react'

import './UserView.css'

export function UserView() {
    return(
        <article className='user-view-article'>
           <header className='user-view-header'>
                <img className='user-view-avatar' src='https://unavatar.io/germanandino' alt="user avatar" />
                <div className='user-view-userNameContainer'>
                    <h1 className='user-view-userName'>German Andino</h1>
                </div>
           </header>
        </article>
    )
}

export default UserView
