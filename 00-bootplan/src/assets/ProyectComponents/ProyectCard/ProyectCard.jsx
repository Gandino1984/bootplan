import './ProyectCard.css';

export function ProyectCard({proyectData}){
    return(
        <article className='card'>
            <div>
                <button className='btn'>Mostrar</button>
                <button className='btn'>Borrar</button>
            </div>
            <h2>{proyectData.username}</h2>
            <h4>Información</h4>
            <p>{proyectData.description}</p>
        </article>    
    )
}

export default ProyectCard;
