import './ProyectCard.css';
import BtnRedirect from '../../ButtonComponents/BtnRedirect.jsx';

export function ProyectCard({proyectData}){
    return(
        <article className='card'>
            {/* 
            <div>
                <BtnRedirect Title="Mostrar"/> 
                <BtnRedirect Title="Borrar"/> 
            </div>
            <h2>{proyectData.username}</h2>
            <h4>Información</h4>
            <p>{proyectData.description}</p>
            */}
            <div>
                <BtnRedirect Title="Mostrar"/> 
                <BtnRedirect Title="Borrar"/> 
            </div>
            <h2>Nombre del Proyecto</h2>
            <h4>Información</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </article>    
    )
}

export default ProyectCard;
