//React imports
import React from 'react'

//Components imports
import TodoForm from './TodoForm'
import Todo from './Todo';

//universally unique identifier generator can be used to separate and identify database records and as a key
import {v4 as uuidv4 } from 'uuid';
uuidv4(); //uses the standard random number generator

//Import image
import strawberry from '../components/images/strawberry.png'




function TodoWrapper() {
        const [todos, setTodos] = React.useState([])


            //use props to pass from todoForm to todowrapper

            
        const addTodo = todo => {
            setTodos([...todos, 
                {
                    id: uuidv4(), 
                    task: todo,
                    completed:false, 
                    isEditing:false
                }
            ])
            console.log(todos)
        }


        const toggleComplete = id => {
            //checking if the todo id equals= the id we passed in,
            //if true, take a copy of that todo and update the completed value
            setTodos(todos.map(todo => todo.id === id ? 

            //true = false = false = true, toggles the cross out on and off
            {todo, completed: !todo.completed} : todo))
                                               //else if its not equal just return the todo
        }


        const deleteTodo = id => {
            //filtering each todo thats not equal to the id.
            //removing the todo with the id equal to the id we passed in.
            setTodos(todos.filter(todo => todo.id !== id))
        }



    return(
        <div className='row TodoWrapper'>
            <h1 className='col-sm-9 px-0 TodoHeader'>
            <img px-0 class="col-sm-2 px-3 img-fluid" src={strawberry} alt="" />
                Let's get things done!
            <img px-0 class="col-sm-2 px-3 img-fluid" src={strawberry} alt="" />
            </h1>
            <TodoForm add={addTodo} />

            {/* generates a Todo for each value in its state */}
            {todos.map((todo, index) => (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}
                />
            ))}
        </div>
    )
}




export default TodoWrapper