import "./ComponentTestGerman.css"

import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import Header from "./ProyectComponents/BarraBusqueda/BarraBusqueda.jsx";

 export function ComponentTest(){
    return(
        <div className="ComponentTest-container">
            {/* <UserModal /> */}
            <Header />
        </div>   
    )
}

export default ComponentTest;