import "./ComponentTestLuis.css"
import { useState } from "react";

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import ProjectModal from "./ProjectComponents/projectModal/ProjectModal.jsx";

import MainProjectPage from "./MainProjectPage/MainProjectPage.jsx";


 export function ComponentTestLuis(){
    return(
        <div className="ComponentTest-container">
            {/* <ProjectModal /> */}
            {/* <UserModal /> */}
            <MainProjectPage />
            {/* <HomeInfo />
            <CardManager /> */}
        </div>
    )
}

export default ComponentTestLuis;