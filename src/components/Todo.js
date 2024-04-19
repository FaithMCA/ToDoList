//React imports
import React from 'react'

//FontAwesomeIcon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'




function Todo(data) {
    return(
        <div className="col-sm-4 mx-center border-rounded Todo">
            <p onClick={() => toggleComplete(data.task.id)} className={`${data.task.completed ? "text-decoration-line-through": ""}`}>{data.task.task}</p>
            <div className='d-inline-flex p-3'>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(data.task.id)} />
            </div>
        </div>
    )
}




export default Todo