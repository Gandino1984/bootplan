import "./ComponentTestGerman.css"


import MainProjectPage from "./MainProjectPage/MainProjectPage.jsx";
import  TaskModal  from "./tasksComponents/TaskModal.jsx";
import ProjectsList from "./MainProjectPage/ProjectsList.jsx";



 export function ComponentTestGerman({projects}){
    return(
        <div className="ComponentTest-container">
            {/* <TaskModal /> */}
            <MainProjectPage projects={projects}/>
            {/* <ProjectsList projects={offlineProjects}/> */}
        </div>
    )
}

export default ComponentTestGerman;