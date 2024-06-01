import React, { useState } from 'react';
import ProjectInput from './ProjectInput.jsx';
// import UserView from '../../UserComponents/UserView/UserView.jsx';
import './ProjectModal.css';
import ProjectDescriptionInput from './ProjectDescriptionInput.jsx';

export function ProjectModal(){
 
    const [formSlideIsUp, setFormSlideUp] = useState(false);
    const [formSlideIsDown, setFormSlideDown] = useState(true);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
       
    function submitProjectBtnHandler(e){
      e.preventDefault();
    }

    const formSlideAnimation = formSlideIsDown ? "animationSlideUp" : "animationSlideDown";

    return(
        <div className='projectModal-fullscreenBackground'>
                <div className={'projectModal-formContainer ' + formSlideAnimation}>                
                        <div className='projectModal-menuContainer'>
                                {/* <button className='projectModal-formSwitchBtn' onClick={()=>setIsRegistered(register=>!register)} >{!isRegistered ? "INICIAR SESIÓN" : "REGISTRARME"}</button> */}
                                <button className='projectModal-formCloseBtn' onClick={()=>setFormSlideDown(formSlideIsDown=>!formSlideIsDown)} >-</button>
                        </div>
                        <h2 className='title-projectModal'>CREAR NUEVO PROYECTO</h2>
                        <form className='projectModal-form'>
                                <div className='projectModal-inputsContainer'>
                                                                       
                                    <ProjectInput onChange={setProjectName} />
                                    <ProjectDescriptionInput onChange={setProjectDescription} />
                                </div>    
                            <button type="submit" className='ProjectModal-submitBtn' onClick={submitProjectBtnHandler}>CREAR</button>
                        </form> 
                        
                </div>
        </div>
    );
}

export default ProjectModal;
