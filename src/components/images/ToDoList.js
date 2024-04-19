// //React Imports
// import React from 'react'
// //Import image
// import strawberry from '../components/images/strawberry.png'

//THE OBJECT DATA(plural) CONTAINED IN THE TODOLIST
// const todolistData = [
//     {
//         todo: "1.) Eat breakfast.",
//         time: "6:30 AM"
//     },
//     {
//         todo: "2.) Go for a jog.",
//         time: "7:00 AM"
//     },
//     {
//         todo: "3.) Shower.",
//         time: "8:00 AM"
//     },
//     {
//         todo: "4.) Work on big brain coding.",
//         time: "9:00 AM"
//     },
//     {
//         todo: "5.) Lunchtime.",
//         time: "12:00 PM"
//     },
//     {
//         todo: "6.) Get a snack.",
//         time: "3 AM"
//     },
//     {
//         todo: "7.) Become a gremlin",
//         time: "6 AM"
//     }
// ]



// //FORMS???
// function ToDoList() {
//     //const [count, setCount] = useState(4)
//     //with useState, it always returns an array with two values:
//     //first value is [our current state, the second value is a function that allows us to update our current state]
//     //     function decrementCount(){
//     //     setCount(prevCount => prevCount -1) 
//     //    }
//     //     function incrementCount(){
//     //     setCount(prevCount => prevCount +1) 
//     //    }



//     //the todolist
//     const [todolistInputFormData, settodolistInputFormData] = React.useState({
//         todo:"",
//         time:"",
//     })

//     //addItem
//     const [todolistData, settodolistData] = React.useState([])

//     console.log(todolistInputFormData)

    
//     function addItem() {
//         const newThingText = `Thing ${thingsArray.length + 1}`//use temporal literals not quotation marks``''

//         setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`] )
//         console.log(thingsArray)
//     }
    

//     function handleEvent(event) {
//         const {name, value, type, checked} = event.target

//         settodolistInputFormData(prevtodolistInputFormData => {
//             return {
//                 ...prevtodolistInputFormData,

//                 [name]: type === "checkbox" ? checked : value
//             }
//         })//end settodolistFormData
//     }//end handleEvent function

    
//     function handleSubmit(event) {
//         // It Prevents our page from Refreshing and re-rendering the page
//         event.preventDefault

//         console.log(ToDoList)
//     }//end handleSubmit




//     return (
//         <div className="row todoListItemBase justify-content-center">
//             <div className="col-sm-6 todoListItemColumns rounded">
//                 <div className="row">
//                     <div className="col-sm-10">
//                         <form action="">
//                             <input 
//                                 type="text" 
//                                 placeholder="Task to do?" 
//                                 name="todo"
//                                 onChange={handleEvent}
//                                 value={todolistInputFormData.todo}
//                             />
//                             <input 
//                                 type="text" 
//                                 placeholder="At what time?" 
//                                 name="time"
//                                 onChange={handleEvent}
//                                 value={todolistInputFormData.time}
//                             />
//                             <div className="col-sm-2">
//                                 <button all-unset cursor-pointer onclick="submit()">
//                                     <img px-0 class="img-fluid" src={strawberry} alt="" />
//                                 </button>
//                                 <button 
//                                     class="btn btn-outline-warning" onClick={addItem}> Add Item
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>                    
//             </div>
//         </div>
//     )

// }//end ToDoList function










    

// function ToDoList() {
//     console.log(todolistData)
//     //.map = ESSENTIALLY A FOR LOOP TO PASS THROUGH THE ARRAY OBJECTS
//     const todoList = todolistData.map((currentObject) => {
//             return (
//             <ToDoListItem 
//             todo={currentObject.todo} 
//             time={currentObject.time}
//             />
//             )
//         }
//     )

//     return (
//                 <div>
//                     {todoList} {/*displays the final product*/}
//                 </div>
//     )
// }//end ToDoList data looper function




//FORMATS HOW YOU WANT THE TEMPLATE TO SHOW ON THE WEBSITE
// function ToDoListItem(todoProps){
//     console.log(todoProps)
//     return (
//         <div className="row todoListItemBase justify-content-center">
//             <div className="col-sm-6 todoListItemColumns rounded">
//                 <div className="row">
//                     <div className="col-sm-10">
//                         <h4 className='todoProps'>{todoProps.todo}</h4>
//                         <p className='timeProps'>{todoProps.time}</p>                        
//                     </div>
//                     <div className="col-sm-2">
//                         <button all-unset cursor-pointer onclick="submit()">
//                             <img px-0 class="img-fluid" src={strawberry} alt="" />
//                         </button>
//                     </div>

//                 </div>                    
//             </div>
//         </div>
//     )
// }//end ToDoListItem prop function




// export default ToDoList;