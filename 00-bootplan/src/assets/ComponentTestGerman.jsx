import "./ComponentTestGerman.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

<<<<<<< HEAD
 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            <UserModal />
        </div>   
=======
import ProjectModal from "./ProyectComponents/projectModal/ProjectModal.jsx";

 import MainProjectPage from "./mainProjectPage/MainProjectPage.jsx";

 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            {/* <ProjectModal /> */}
            {/* <UserModal /> */}
            <MainProjectPage />
        </div>
>>>>>>> dev
    )
}

export default ComponentTest;