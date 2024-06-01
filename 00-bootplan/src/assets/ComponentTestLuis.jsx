import "./ComponentTestLuis.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import ProjectModal from "./ProyectComponents/projectModal/ProjectModal.jsx";

 import MainProjectPage from "./mainProjectPage/MainProjectPage.jsx";

 import HomeInfo from "./HomeComponents/HomeInfo/HomeInfo.jsx";

 import CardManager from "./ProyectComponents/CardManager/CardManager.jsx";

 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            {/* <ProjectModal /> */}
            {/* <UserModal /> */}
            <MainProjectPage />
            <HomeInfo />
            
        </div>
    )
}

export default ComponentTest;