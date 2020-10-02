# React-todo
Project

//                                                                STEP BY STEP PROCESS

import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
//The <input> tag specifies an input field where the user can enter data.
//Below function App() is a component.(Everything in react is a component based)
//App component is refering the entire componed which we can see below.
// It returns some HTML code and it is specal HTML which we call as "JSX"
//We can use dynamic JS in between components by using "{}"-->help of JSX.
//todos variable is an Array.it is an record og shortterm memory.
//by using setTodo variable we can append things to the array.(when ever we need to change todos we need to use setTodos)
//the below todos will be a temporary list as soon as we click refresh all our todos will be disappear.before desappearing we shouls send our todo list to our database.which is Firebase in our case.
/**
 *                                                          STEP   1
 */
// function App() {
//   const [todos, setTodos] = useState(['My first todo-list','My second todo-list']); //The Array i am adding here will be added in the clint side page in realtime.
  
//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <input />               
//       <button>Add Todo</button>

//       <ul>
//         {todos.map((todo) => <li>{todo}</li>)}
//       </ul>

//     </div>
//   );
// }

/**
 *                                                          STEP   2
 */
//Here we gonna see if we type the input and if we click the "button" or "Enter key" we need to append to the todos array.
/**
 * 1. We need some kind of short time memory to do that.so we going to add the short term memory in this step.
 * 2. The input we mentiond below is the search bar should be empty.
 * 3. We need to connect out <input/> to the useState.
 * 4. @ line 43 we are saying, we are mapping our input in the state (line 48  'because of this line we cant able to type any thing in our search bar.'-->This is because we are setting it always blank.)
 */
// function App() {
//   const [todos, setTodos] = useState(['My first todo-list','My second todo-list']);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <input value={input}/>               
//       <button>Add Todo</button>

//       <ul>
//         {todos.map((todo) => <li>{todo}</li>)}
//       </ul>

//     </div>
//   );
// }
/**
 *                              STEP 3
 */
/**
 * 1. We gonna tell react every time we type(search bar) we should take track of that and update it.so,
 * 2.In line 74 we add "onChange"-->it is a function and it allows us to capture the event every time we press the key inside of the input(search bar). Every time we press the key on key-bord it fires the event.(when that event is fired we are setting the input to 'event''target' which the input we typing in "searchbar" value.--->every single time we type it get updated here.)
 * 3.With the help of step three now we can enter data in search bar.
 */

// function App() {
//   const [todos, setTodos] = useState(['My first todo-list','My second todo-list']);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <input value={input} onChange={event => setInput(event.target.value)}/>               
//       <button>Add Todo</button>

//       <ul>
//         {todos.map((todo) => <li>{todo}</li>)}
//       </ul>

//     </div>
//   );
// }

/**
 *                              STEP 4
 */

 /**
  * 1.Here we have input value. when ever we click the button to add a todo it's gonna push in to the build.(we can do this in 2 ways 1.by inline in 'bitton'2. with function.)
  * 2. addTodo taken as event(when ever then is an 'onChange'or'onClick' it will fire an event)
  * 3. addTodo(line 102) will fire off whwn we click the button.
  * 4.Then we gonna use logic and push it inside the list and sent the input which uses enters in the search bar so we are setting it to 'input'(it will be in our short term memory).
  * 5.If we hit enter it wont work because it is not a form.To do that we must  return one <form/> and then when we press "Enter key" then the button should work.(*Only if it is a form we can press enter then only 'enter key' works.)(*If we submit the form whole page will refresh)
  */

// function App() {
//   const [todos, setTodos] = useState(['My first todo','My second todo']);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.
//   // console.log(input)           // You can inspect it and check there wont be any sory of refresh in page.
  
//   const addTodo = (event) =>{
//     setTodos([...todos, input]);        //Here we are pushing the data(by spread operator) to the end of the current array.

//   }

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <form>
//         <input value={input} onChange={event => setInput(event.target.value)}/>               
//         <button type="submit" onClick={ addTodo }>Add Todo</button>
//       </form>

//       <ul>
//         {todos.map((todo) => <li>{todo}</li>)}
//       </ul>

//     </div>
//   );
// }

/**
 *                          STEP 5
 */
/**
 * 1.To avoid full page to refresh(line 146)-->submit is firing addTodo function in there it goes to the "addTodo" function(line 135).In line 135 we need to set some default behaviour.
 * 2.preventDefault() stops refreshing the whole page
 * 3.line 138 --> makes my search bar blank again once agter i click the button so that i can type new todo.
 */
// function App() {
//   const [todos, setTodos] = useState(['My first todo','My second todo']);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.
  
//   const addTodo = (event) =>{
//     event.preventDefault();      
//     setTodos([...todos, input]);        //Here we are pushing the data(by spread operator) to the end of the current array.
//     setInput('')

//   }

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <form>
//         <input value={input} onChange={event => setInput(event.target.value)}/>               
//         <button type="submit" onClick={ addTodo }>Add Todo</button>
//       </form>

//       <ul>
//         {todos.map((todo) => <li>{todo}</li>)}
//       </ul>

//     </div>
//   );
// }

/**
 * 1.After this we have 2 things(to look app bit nice)
 *        i. create component for each of the todo
 *        ii. we can use materialUI
 */

 /**
  *                               STEP 6
  */
 /**
  * 1. Here we gonna use MaterialUI nad change button to get some CSS
  * 2.Once we added the Button from "materialUi" we need to import that button at the top.
  * 3. If the value is null it make a blank unordered list so we need to avoid that gaps. to avoid that we should mention in the "Button line" "disabled = { !input }""
  * 4.I will be look good when we set it in formcontrol and we can write input variable.
  * 5.
  */

//  function App() {
//   const [todos, setTodos] = useState(['My first todo','My second todo']);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.
  
//   const addTodo = (event) =>{
//     event.preventDefault();      
//     setTodos([...todos, input]);        //Here we are pushing the data(by spread operator) to the end of the current array.
//     setInput('')

//   }

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <form>
//         <FormControl>
//             <InputLabel>write a todo</InputLabel>
//             <Input value={input} onChange={event => setInput(event.target.value)}/>
//         </FormControl>       

//         <Button disabled = { !input } type= "submit" onClick={ addTodo } variant="contained" color="primary">Add Todo</Button>             
//         {/* <button type="submit" onClick={ addTodo }>Add Todo</button> */}
//       </form>

//       <ul>
//         {todos.map((todo) => <li>{todo}</li>)}
//       </ul>

//     </div>
//   );
// }

 /**
  *                               STEP 7
  */

 /**
  * 1.How Components Work(we gonna change how components works).
  * 2. we gonna import Todo from todo.js file.
  */

//  function App() {
//   const [todos, setTodos] = useState(['My first todo','My second todo']);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.
  
//   const addTodo = (event) =>{
//     event.preventDefault();      
//     setTodos([...todos, input]);        //Here we are pushing the data(by spread operator) to the end of the current array.
//     setInput('')

//   }

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <form>
//         <FormControl>
//             <InputLabel>write a todo</InputLabel>
//             <Input value={input} onChange={event => setInput(event.target.value)}/>
//         </FormControl>       

//         <Button disabled = { !input } type= "submit" onClick={ addTodo } variant="contained" color="primary">Add Todo</Button>             
//         {/* <button type="submit" onClick={ addTodo }>Add Todo</button> */}
//       </form>

//       <ul>
//         {todos.map((todo) => <Todo text={todo}/>)}
//       </ul>

//     </div>
//   );
// }

/**
 *                            STEP 8
 */
/**
 * 1. here we gonna link to our fire base database.
 * 2. Whwn the app lodes we need to listen to the db and fwtch new todos as they get added/removed .
 * 3.useEffect(() => {}, dependancies) 
 * 4.In useEffect if we leave array as null.app.js run once. 
 * 5.If we put variable inside the "dependancies[]" runce ones when the app lodes then when ever the variable changes then it will fire it out.
 * 6. every single time the data base changes we need to fire some kind of event.so we are using snaapshot
 * 6."snapshot"-->Every sinle time the data base changes it snaps and it gives back the information.
 * 7."docs" are what we added to the db
 * 8. setTodos(snapshot.docs.map(doc => doc.data() ---->This will return us an array of objects.
 * 9. This STEP 8 shows read stuff from the database.
 */
// function App() {
//   const [todos, setTodos] = useState([]);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.
  
//   useEffect(() => {
//     // this code fires whwn thw app.js loads
//     db.collection('todos').onSnapshot(snapshot =>{
//       // console.log(setTodos(snapshot.docs.map(doc => doc.data().todo)))
//       setTodos(snapshot.docs.map(doc => doc.data().todo))
//     })

//   }, []);   
 

//   const addTodo = (event) =>{
//     event.preventDefault();      
//     setTodos([...todos, input]);        //Here we are pushing the data(by spread operator) to the end of the current array.
//     setInput('')

//   }

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <form>
//         <FormControl>
//             <InputLabel>write a todo</InputLabel>
//             <Input value={input} onChange={event => setInput(event.target.value)}/>
//         </FormControl>       

//         <Button disabled = { !input } type= "submit" onClick={ addTodo } variant="contained" color="primary">Add Todo</Button>             
//         {/* <button type="submit" onClick={ addTodo }>Add Todo</button> */}
//       </form>

//       <ul>
//         {todos.map((todo) => <Todo text={todo}/>)}
//       </ul>

//     </div>
//   );
// }

/**
 *                                    STEP 9
 */
/**
 *1.db.collection('todos').add({
      todo: input
    }---------------------------->it is going to link with db and fires of the snapshot then they add todos
 * 2.   firebase.firestore.FieldValue.serverTimestamp()----> this is where our app is hosted.The resion why we use is when we push in where ever in the world that timestamp will be consist to every one. 
 */
// function App() {
//   const [todos, setTodos] = useState([]);   
//   const [input, setInput] = useState('');  //This line shows that search bar should be empty.
  
//   useEffect(() => {
//     // this code fires whwn thw app.js loads
//     db.collection('todos').onSnapshot(snapshot =>{
//       setTodos(snapshot.docs.map(doc => doc.data().todo))
//     })

//   }, []);   
 

//   const addTodo = (event) =>{
//     event.preventDefault();   
    
//     db.collection('todos').add({
//       todo: input,
//       timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     })
//     // setTodos([...todos, input]);        
//     setInput('')

//   }

//   return (
//     <div className="App">
//       <h1>My Todo List </h1>
//       <form>
//         <FormControl>
//             <InputLabel>write a todo</InputLabel>
//             <Input value={input} onChange={event => setInput(event.target.value)}/>
//         </FormControl>       

//         <Button disabled = { !input } type= "submit" onClick={ addTodo } variant="contained" color="primary">Add Todo</Button>             
//       </form>

//       <ul>
//         {todos.map((todo) => <Todo text={todo}/>)}
//       </ul>

//     </div>
//   );
// }

/**
 *                              STEP 10
 */

 /**
  * 1. Without creating a new document in db we going to create one collection directly from here.
  */
function App() {
  const [todos, setTodos] = useState([]);   
  const [input, setInput] = useState('');  //This line shows that search bar should be empty.
  
  useEffect(() => {
    // this code fires whwn thw app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })

  }, []);   
 

  const addTodo = (event) =>{
    event.preventDefault();   
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);        
    setInput('')

  }

  return (
    <div className="App">
      <h1>My Todo List </h1>
      <form>
        <FormControl>
            <InputLabel>write a todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>       

        <Button disabled = { !input } type= "submit" onClick={ addTodo } variant="contained" color="primary">Add Todo</Button>             
      </form>

      <ul>
        {todos.map((todo) => <Todo text={todo}/>)}
      </ul>

    </div>
  );
}

export default App;


//                               Todo.js


/**
 * 1.we are using a dynamic variable called Todo.So we dont have access to that todo.so we gonna use 'props'
 * 2. A component is that we write once and we can use in several times in several places.(we can re use the component.)
 * 3."props"-->Stands for "properties"-->it allow us when we are using a component it allow us to differentiate one component from another.
 * 4. we are passing the "todo". we should call out todo. so we wnna go back app.js.
 * 5. Break code into components in reactjs.
 * 6. from MaterialUI we get all that list tages.
 * 7. we can check what primary and secondary do in the clint side page.
 * 8. every component can have its own CSS.
 * 9.class name is like a key to write the CSS file.
 * 10.<></>We are wraping because we cant make 2 things at the same time.
 * 11. UpdateTodo --> updates the todo with new input list.
 */


