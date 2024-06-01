import { useState } from 'react'
import './MainProjectPage.css'
import BarraBusqueda from '../ProyectComponents/BarraBusqueda/BarraBusqueda.jsx';
import HomeInfo from '../HomeComponents/HomeInfo/HomeInfo.jsx';
import CardManager from '../ProyectComponents/CardManager/CardManager.jsx';

export function MainProjectPage() {
//   const [count, setCount] = useState(0);

  return (
        <>
          <section>
            <BarraBusqueda />
            <HomeInfo />
            <CardManager />
          </section>


        </>
  
  )
}

export default MainProjectPage; 