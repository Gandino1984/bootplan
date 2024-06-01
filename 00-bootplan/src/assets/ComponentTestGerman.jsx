import "./ComponentTestGerman.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import ProjectModal from "./ProyectComponents/projectModal/ProjectModal.jsx";

 import MainProjectPage from "./mainProjectPage/MainProjectPage.jsx";

 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            {/* <ProjectModal /> */}
            {/* <UserModal /> */}
            <MainProjectPage />
        </div>
    )
}

export default ComponentTest;