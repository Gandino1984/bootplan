import React, { useState } from 'react';
import ProjectSearchInput from "./ProjectSearchInput";
import UserView from '../../UserComponents/UserView/UserView';

import './HeaderMenuBar.css';

function HeaderMenuBar(){
    const [projectNameSearch, setProjectNameSearch] = useState('');
    
    return (
        <div className="headerMenuBar-container">
            <UserView className='headerMenuBar-userView'/>
            <div className='headerMenuBar-titleContainer'>
                <span className='headerMenuBar-title'>PROYECTOS</span>
                <ion-icon name="add"></ion-icon>
            </div>
            <div className='headerMenuBar-projectSearchContainer'>
                <ProjectSearchInput onChange={setProjectNameSearch} />
                <ion-icon name="search-outline"></ion-icon>
            </div>
        </div>
    );
}

export default HeaderMenuBar;
