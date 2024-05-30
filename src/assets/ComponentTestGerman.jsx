import "./ComponentTestGerman.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import CreateProject from "./ProyectComponents/CreateProject/CreateProject.jsx";



 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            {/* <UserModal /> */}
            <CreateProject />
        </div>   
    )
}

export default ComponentTest;