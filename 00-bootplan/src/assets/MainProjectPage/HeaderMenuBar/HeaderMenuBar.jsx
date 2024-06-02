import React, { useState } from 'react';
import ProjectSearchInput from "./ProjectSearchInput";
import UserView from '../../UserComponents/UserView/UserView';
import UserModal from '../../UserComponents/UserInput/UserModal';

import './HeaderMenuBar.css';

function HeaderMenuBar({onLoad}) {

    const [projectNameSearch, setProjectNameSearch] = useState('');

    const [registerBtnClicked, setUserRegisterBtnClick] = useState(false);



    function userRegisterBtnClickHandler(e){
        
        e.preventDefault();
        if (registerBtnClicked == false){
            setUserRegisterBtnClick(true);
            onLoad("on");
            
        } else {
            setUserRegisterBtnClick(false);
            onLoad("off");
        }
    }
    
    return (
        <div className="headerMenuBar-container">
            <div className='headerMenuBar-userSectionContainer'>
                <button onClick={userRegisterBtnClickHandler} className='headerMenuBar-newUserBtn'>REGISTRO</button>
                <UserView className='headerMenuBar-userView'/>
            </div>
            
            <div className='headerMenuBar-titleContainer'>
                <span className='headerMenuBar-title'>BOOTPLAN</span>
                <button className='headerMenuBar-newProjectBtn'>NUEVO PROYECTO</button>
            </div>
            <div className='headerMenuBar-projectSearchContainer'>
                <ProjectSearchInput onChange={setProjectNameSearch} />
                <ion-icon name="search-outline"></ion-icon>
            </div>
        </div>
    );
}

export default HeaderMenuBar;
