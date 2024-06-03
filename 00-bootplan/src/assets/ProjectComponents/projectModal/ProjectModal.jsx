import React, { useState } from 'react';
import ProjectInput from './ProjectInput.jsx';
// import UserView from '../../UserComponents/UserView/UserView.jsx';
import './ProjectModal.css';
import ProjectDescriptionInput from './ProjectDescriptionInput.jsx';

	let backgroundClass = '';
    let formAnimation = ""; 

export function ProjectModal({projectModalState, projectModalCloseBtnHandler}){
 
    const [formSlideIsUp, setFormSlideUp] = useState(false);
    const [formSlideIsDown, setFormSlideDown] = useState(true);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
       
    if(projectModalState){
        backgroundClass = 'projectModal-fullscreenBackground show';
        formAnimation = "animationSlideUp";
    }else{
        backgroundClass = 'projectModal-fullscreenBackground hide';
        formAnimation = "animationSlideDown";
    }

    function submitProjectBtnHandler(e){
      e.preventDefault();
    }

    function closeBtnHandler(e){
        projectModalCloseBtnHandler(e);
    }

    const formSlideAnimation = formSlideIsDown ? "animationSlideUp" : "animationSlideDown";

    return(
        <div className={backgroundClass}>
                <div className={'projectModal-formContainer ' + formAnimation}>                
                        <div className='projectModal-menuContainer'>
                                <button className='projectModal-formCloseBtn' onClick={closeBtnHandler} >-</button>
                        </div>
                        <h2 className='title-projectModal'>CREAR NUEVO PROYECTO</h2>
                        <form className='projectModal-form'>
                                <div className='projectModal-inputsContainer'>
                                                                       
                                    <ProjectInput onChange={setProjectName} />
                                    <ProjectDescriptionInput onChange={setProjectDescription} />
                                </div>    
                            <button type="submit" className='projectModal-submitBtn' onClick={submitProjectBtnHandler}>CREAR</button>
                        </form> 
                        
                </div>
        </div>
    );
}

export default ProjectModal;
