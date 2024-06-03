import React, { useState } from 'react';
import ProjectSearchInput from "./ProjectSearchInput";
import UserView from '../../UserComponents/UserView/UserView';
import UserModal from '../../UserComponents/UserInput/UserModal';

import './HeaderMenuBar.css';

function HeaderMenuBar() {

    const [projectNameSearch, setProjectNameSearch] = useState("");

    function ProjectSearchInputHandler(e){
        e.preventDefault();
        const projectSearch = e.target.value;
        setProjectNameSearch(projectSearch);
    }
    
    return (
        <div className='headerMenuBar-mainContainer'>
            <div className='headerMenuBar-userViewContainer'>
                <UserView className='headerMenuBar-userView'/>
            </div>
            <div className='headerMenuBar-titleContainer'>
                <span className='headerMenuBar-title'>BOOTPLAN</span>
            </div>
            <div className='headerMenuBar-options'>
                <ProjectSearchInput onChange={setProjectNameSearch} />
                <ion-icon name="search-outline"></ion-icon>
            </div>
            
        </div>
        
    );
}

export default HeaderMenuBar;
