import React, { useState } from 'react';
import ProjectSearchInput from "./ProjectSearchInput";
import UserView from '../../UserComponents/UserView/UserView';

import './HeaderMenuBar.css';

function HeaderMenuBar(){
    const [projectNameSearch, setProjectNameSearch] = useState('');
    
    return (
        <div className="headerMenuBar-container">
            <div className='headerMenuBar-userSectionContainer'>
                <ion-icon name="person-add-outline"></ion-icon>
                <UserView className='headerMenuBar-userView'/>
            </div>
            
            <div className='headerMenuBar-titleContainer'>
                <span className='headerMenuBar-title'>BOOTPLAN</span>
                <button className='headerMenuBar-newProjectBtn'><ion-icon name="add"></ion-icon>NUEVO PROYECTO</button>
            </div>
            <div className='headerMenuBar-projectSearchContainer'>
                <ProjectSearchInput onChange={setProjectNameSearch} />
                <ion-icon name="search-outline"></ion-icon>
            </div>
        </div>
    );
}

export default HeaderMenuBar;
