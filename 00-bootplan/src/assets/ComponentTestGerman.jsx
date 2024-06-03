import "./ComponentTestGerman.css"


import MainProjectPage from "./MainProjectPage/MainProjectPage.jsx";
import  TaskModal  from "./tasksComponents/TaskModal.jsx";

 export function ComponentTestGerman(){
    return(
        <div className="ComponentTest-container">
            <TaskModal />
            {/* <MainProjectPage /> */}
        </div>
    )
}

export default ComponentTestGerman;