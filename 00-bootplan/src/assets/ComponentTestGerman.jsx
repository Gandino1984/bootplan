import "./ComponentTestGerman.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import ProjectModal from "./ProjectComponents/projectModal/ProjectModal.jsx";

 import MainProjectPage from "./MainProjectPage/MainProjectPage.jsx";

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