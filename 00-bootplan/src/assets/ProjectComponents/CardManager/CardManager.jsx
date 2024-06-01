import './CardManager.css';
import ProyectCard from '../ProjectCard/ProyectCard';

export function CardManager({proyectData}){
    return(
        <article>
            <div id='card-manager'>
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
            </div>
        </article>    
    )
}

export default CardManager;