import React from 'react'
import { useState } from 'react'
import './MainProjectPage.css'
import HeaderMenuBar from "./HeaderMenuBar/HeaderMenuBar.jsx";
import CardManager from "../ProjectComponents/CardManager/CardManager.jsx";
import ProyectCard from "../ProjectComponents/ProjectCard/ProyectCard.jsx";
import HomeInfo from "../HomeComponents/HomeInfo/HomeInfo.jsx";

export function MainProjectPage() {
//   const [count, setCount] = useState(0);

  return (
        <>
             <HeaderMenuBar />
             {/* <HomeInfo /> */}
             {/* <CardManager /> */}
             {/* <ProyectCard /> */}
        </>
  
  )
}

export default MainProjectPage; 