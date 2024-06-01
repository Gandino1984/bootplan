import React, { useState } from 'react';
import ProjectSearchInput from "./ProjectSearchInput";

import './HeaderMenuBar.css';

function HeaderMenuBar(){
    const [projectNameSearch, setProjectNameSearch] = useState('');
    return (
        <div className="headerMenuBar-container">
            <ProjectSearchInput onChange={setProjectNameSearch} />
        </div>
    );
}

export default HeaderMenuBar;
