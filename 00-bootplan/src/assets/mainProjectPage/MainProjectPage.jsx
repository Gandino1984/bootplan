import { useState } from 'react'
import './MainProjectPage.css'

import Barra1 from '../ProyectComponents/BarraBusqueda/BarraBusqueda1.jsx';

import Barra2 from '../ProyectComponents/BarraBusqueda/BarraBusqueda2.jsx';

import HomeInfo from '../HomeComponents/HomeInfo/HomeInfo.jsx';
import CardManager from '../ProyectComponents/CardManager/CardManager.jsx';

export function MainProjectPage() {
//   const [count, setCount] = useState(0);

  return (
        <>
          <section>
            <Barra1 />
            <Barra2 />
            <HomeInfo />
            <CardManager />
          </section>


        </>
  
  )
}

export default MainProjectPage; 