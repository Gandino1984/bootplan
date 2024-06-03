
import "./ProjectsList.css";

const ProjectsList = ({projects}) => {

    const projectsHtml = projects.map(project => {
        return (
            <div draggable="true" className="project-card" key={project._id}>
                <h1 className="project-name">Nombre de proyecto: {project.name}</h1>
                <div className="project-users">
                    <p> 
                        Cantidad de usuarios: {project.users.length}
                    </p>
                </div>
                <div className="project-owner">
                    <p>
                        Número de tareas: {project.tasks.length}
                    </p>    
                </div>
            </div>
        );
    });

    return (
        <div className="project-list">
            {projectsHtml}
        </div>
    );

}

export default ProjectsList;