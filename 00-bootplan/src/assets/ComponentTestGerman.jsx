import "./ComponentTestGerman.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import ProjectModal from "./ProyectComponents/projectModal/ProjectModal.jsx";

 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            {/* <ProjectModal /> */}
            <UserModal />
        </div>   
    )
}

export default ComponentTest;