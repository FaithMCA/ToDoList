import React from 'react'



function TodoForm(action) {
        //with useState, it always returns an array with two values:
        //1st value is [our current state, 2nd value is a function that allows us to update our current state]
        const [value, setValue] = React.useState("")

        
        //handleSubmit is a function that captures the value of the state when we submit the form
        const handleSubmit = event => {
            //preventDefaults stops the page from reloading when submitting forms
            event.preventDefault();

            //need to parse this value to the todostate, which is in todowrapper parent
            //cant keep this state in here because other components need to access this useState as well..
            //this is where addTodo comes in to fix the above^

            //lets us pass the state from the todoForm to the todoWrapper
            action.add(value) 
            
            //after we submit the form we want to clear the form
            setValue("") 
            // ^ a way to clear input boxes is reset to empty string
        }



    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' 
            value={value}
            placeholder='What is the task today?'
          //onChange gets the user's input 
            onChange={(event) => setValue(event.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}




export default TodoForm