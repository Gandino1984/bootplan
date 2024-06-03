import React, { useState } from 'react';
import TaskInput from './TaskInput.jsx';

// import './TaskModal.css';

// [
//     {
//       "title": "string",
//       "description": "string",
//       "estimatedHours": 0,
//       "users": [
//         "string"
//       ],
//       "status": "ToDo",
//       "project": "string"
//     }
//   ]


export function TaskModal(){
    const [task, setTask] = useState('');

    function taskInputHandler(e){
        if(e.target.value){
            setTask(e.target.value);
        }
    }

    return(
        <div className='projectModal-fullscreenBackground'>
            <TaskInput onChange={taskInputHandler}/>
        </div>
    );
}

export default TaskModal;
