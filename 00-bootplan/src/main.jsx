import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentTestGerman from './assets/ComponentTestGerman.jsx'
import ProjectModal from './assets/ProjectComponents/projectModal/ProjectModal.jsx'
import UserModal from './assets/UserComponents/UserInput/UserModal.jsx'
import './main.css'

const offlineProjects =[
  {
    "_id": "66560db0ce1d312aa56d945e",
    "name": "proyecto 1",
    "owner": "66560c915bdf5471c809b42d",
    "users": [
      {
        "_id": "66560c915bdf5471c809b42d",
        "email": "admin@mail.com",
        "username": "admin",
        "role": "user"
      },
      {
        "_id": "66561130703f577e48e48222",
        "email": "uder@mail.com",
        "username": "user",
        "role": "user"
      }
    ],
    "tasks": [
      {
        "_id": "66560e1ece1d312aa56d9464",
        "title": "Crear Readme",
        "description": "Crear un readme explicando todos los detalles",
        "estimatedHours": 2,
        "users": [
          "66560c915bdf5471c809b42d"
        ],
        "status": "ToDo",
        "project": "66560db0ce1d312aa56d945b",
        "recommendedUserQuantity": 1,
        "__v": 1
      },
      {
        "_id": "665d84e193d2838fae73ab56",
        "title": "leer documentacion",
        "description": "leer bien la guia de React",
        "estimatedHours": 10,
        "users": [],
        "status": "Doing",
        "project": "66560db0ce1d312aa56d945b",
        "recommendedUserQuantity": 1,
        "__v": 0
      },
      {
        "_id": "665d851693d2838fae73ab5d",
        "title": "Buscar información",
        "description": "Buscar datos sobre la aplicación que vamos a hacer",
        "estimatedHours": 4,
        "users": [],
        "status": "Done",
        "project": "66560db0ce1d312aa56d945b",
        "recommendedUserQuantity": 1,
        "__v": 0
      }
    ],
    "daysToComplete": 7,
    "__v": 5
  },
  
  
  {
    "_id": "66561ac2d962a543f44adfa0",
    "name": "proyecto 2",
    "description": "esto es una fiesta",
    "owner": "66561130703f577e48e48222",
    "users": [
      {
        "_id": "66561130703f577e48e48222",
        "email": "uder@mail.com",
        "username": "user",
        "role": "user"
      }
    ],
    "tasks": [],
    "daysToComplete": 7,
    "__v": 1
  },

  {
      "_id": "66560db0ce1d312aa56d945c",
      "name": "proyecto 3",
      "owner": "66560c915bdf5471c809b42d",
      "users": [
        {
          "_id": "66560c915bdf5471c809b42d",
          "email": "admin@mail.com",
          "username": "admin",
          "role": "user"
        },
        {
          "_id": "66561130703f577e48e48222",
          "email": "uder@mail.com",
          "username": "user",
          "role": "user"
        }
      ],
      "tasks": [
        {
          "_id": "66560e1ece1d312aa56d9464",
          "title": "Crear Readme",
          "description": "Crear un readme explicando todos los detalles",
          "estimatedHours": 2,
          "users": [
            "66560c915bdf5471c809b42d"
          ],
          "status": "ToDo",
          "project": "66560db0ce1d312aa56d945b",
          "recommendedUserQuantity": 1,
          "__v": 1
        },
        {
          "_id": "665d84e193d2838fae73ab56",
          "title": "leer documentacion",
          "description": "leer bien la guia de React",
          "estimatedHours": 10,
          "users": [],
          "status": "Doing",
          "project": "66560db0ce1d312aa56d945b",
          "recommendedUserQuantity": 1,
          "__v": 0
        },
        {
          "_id": "665d851693d2838fae73ab5d",
          "title": "Buscar información",
          "description": "Buscar datos sobre la aplicación que vamos a hacer",
          "estimatedHours": 4,
          "users": [],
          "status": "Done",
          "project": "66560db0ce1d312aa56d945b",
          "recommendedUserQuantity": 1,
          "__v": 0
        }
      ],
      "daysToComplete": 7,
      "__v": 5
    },
    
    
    {
      "_id": "66561ac2d962a543f44adfa0",
      "name": "proyecto 4",
      "description": "esto es una fiesta",
      "owner": "66561130703f577e48e48222",
      "users": [
        {
          "_id": "66561130703f577e48e48222",
          "email": "uder@mail.com",
          "username": "user",
          "role": "user"
        }
      ],
      "tasks": [],
      "daysToComplete": 7,
      "__v": 1
    },
    {
      "_id": "66560db0ce1d312aa56d945m",
      "name": "proyecto 5",
      "owner": "66560c915bdf5471c809b42d",
      "users": [
        {
          "_id": "66560c915bdf5471c809b42d",
          "email": "admin@mail.com",
          "username": "admin",
          "role": "user"
        },
        {
          "_id": "66561130703f577e48e48222",
          "email": "uder@mail.com",
          "username": "user",
          "role": "user"
        }
      ],
      "tasks": [
        {
          "_id": "66560e1ece1d312aa56d9464",
          "title": "Crear Readme",
          "description": "Crear un readme explicando todos los detalles",
          "estimatedHours": 2,
          "users": [
            "66560c915bdf5471c809b42d"
          ],
          "status": "ToDo",
          "project": "66560db0ce1d312aa56d945b",
          "recommendedUserQuantity": 1,
          "__v": 1
        },
        {
          "_id": "665d84e193d2838fae73ab56",
          "title": "leer documentacion",
          "description": "leer bien la guia de React",
          "estimatedHours": 10,
          "users": [],
          "status": "Doing",
          "project": "66560db0ce1d312aa56d945b",
          "recommendedUserQuantity": 1,
          "__v": 0
        },
        {
          "_id": "665d851693d2838fae73ab5d",
          "title": "Buscar información",
          "description": "Buscar datos sobre la aplicación que vamos a hacer",
          "estimatedHours": 4,
          "users": [],
          "status": "Done",
          "project": "66560db0ce1d312aa56d945b",
          "recommendedUserQuantity": 1,
          "__v": 0
        }
      ],
      "daysToComplete": 7,
      "__v": 5
    },
    
    
    {
      "_id": "66561ac2d962a543f44adfax",
      "name": "proyecto 6",
      "description": "esto es una fiesta",
      "owner": "66561130703f577e48e48222",
      "users": [
        {
          "_id": "66561130703f577e48e48222",
          "email": "uder@mail.com",
          "username": "user",
          "role": "user"
        }
      ],
      "tasks": [],
      "daysToComplete": 7,
      "__v": 1
    }
  
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ComponentTestGerman className="ComponentTest-container" projects={offlineProjects}/>
  </React.StrictMode>,
)
