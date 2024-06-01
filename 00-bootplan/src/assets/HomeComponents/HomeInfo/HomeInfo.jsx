import './HomeInfo.css';
import React, { useState } from 'react';
import BtnRedirect from '../../ButtonComponents/BtnRedirect.jsx';

export function HomeInfo(){
    return(
        <article id='info'>
            <div id='header'>
                <h2 id='title'>Tus Proyectos</h2>
                <BtnRedirect Title="Crear Proyecto"/> 
            </div>
            <div>
                <p>
                    Bienvenido a tus proyectos, la familia de bootplan esta muy feliz de ayudarte a cumplir todas tus metas y ayudarte a gestionar todos tus proyectos. El software de gestión de proyectos de bootplan es un multiplicador de fuerzas. Le ayuda a organizar la gestión del tiempo y de los recursos, mejorando el rendimiento de la empresa y de los empleados, y a tener una mejor idea de lo que funciona y lo que no. El software de gestión de proyectos de bootplan también puede simplificar la colaboración en equipo para que sea más fluida que nunca. Ademas bootplan está diseñado para ser fácil de usar, nuestro objetivo es el de los sistemas que facilitan el trabajo. Con Bootplan no lleva mucho tiempo a los empleados para dominarlos, y deberían tener una interfaz sencilla e intuitiva para llevar a cabo las tareas y comunicarse con los compañeros de equipo. 
                </p>
            </div>
        </article>    
    )
}

export default HomeInfo;