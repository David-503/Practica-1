import React ,{useState}  from 'react';
import Todo from '../components/Todo';
const Form =()=>{
    const [todo,setTodo]=useState({});
    const [todos,setTodos]=useState([
        {todo: 'todo',count:1},
        {todo: 'todo',count:2},
        {todo: 'todo',count:5}
    ])
    
    const handleChange = e=>{
       console.log(e.target); 
       if(e.target.name==="todo"){
           setTodo({[e.target.name]:e.target.value})
       }else if(e.target.name==="count"){
            setTodo({...todo, ...{[e.target.name]:e.target.value}})
       }
        

    }
    const handleClick = e => {
        if(Object.keys(todo).length<2){
            alert('El campo no puede estar vacio')
            return
        }else if(todo.todo.trim() === ''){
            alert('El campo no puede estar vacio')
            return
        }else if (todo.count < 1){
            alert('El campo no puede estar vacio')
            return
        }
            setTodos([...todos,todo])


    }
    const deleteTodo = indice => {
        const newTodos = [...todos] 
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return(
        <>
        <form onSubmit={e=>e.preventDefault()}>
        <label>Agregar tarea</label><br />
        <input type="text" name ="todo" onChange={handleChange} />
        <input type="number" name ="count" onChange={handleChange} />

        <button onClick={handleClick}> agregar</button>

        </form>
        {
            
        todos.map((value,index)=>(
            <Todo todo={value.todo} key={index} deleteTodo={deleteTodo} count={value.count} />
        ))
        }
        </>
    )
}
export default Form
