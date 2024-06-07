import './Todo.css'
import { useRef, useState } from 'react'
import { TodoSelect } from './TodoSelect';
import todoStore from '../store/todoStore.js'
import sideStore from '../store/sideStore.js';

export const Todo = () => {

  const {todo,onTodoCreate,onTodoUpdate,onTodoDel,onTodoDone} = todoStore((state)=>({
    todo : state.todo,
    onTodoCreate : state.onTodoCreate,
    onTodoUpdate : state.onTodoUpdate,
    onTodoDel : state.onTodoDel,
    onTodoDone : state.onTodoDone,
  }))

  const inputRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [selectTodoID, setSelectTodoID] = useState(null);

  const {selectSide} = sideStore((state)=>({
    selectSide : state.selectSide
  }))

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(inputRef.current){
      onTodoCreate(inputRef.current.value, selectSide[0].id);
    }

    inputRef.current.value = '';
    inputRef.current.focus();
  }

  const showSelectTodoItem =(id)=>{
    setSelectTodoID(id);
  }

  const selectTodo = todo.find(item => item.id === selectTodoID )

  const handleTodoUpdate = (event) => {
    const updatedTitle = event.target.value;
    onTodoUpdate(selectTodo.id, updatedTitle)
  }

  const handelDel = () => {
    onTodoDel(selectTodo.id);
    setIsVisible(!selectTodoID)
  }

  return (
    <div className='todo-area'>
      
      <h2>CREATE TODO LIST 👊</h2>
      <form className='todo-input-form' onSubmit={handleSubmit}>
        <input ref={inputRef} maxLength={12}/>
        <button> + </button>
      </form>

      <div className='todo'>
        <div className="todo-list">
          { 
            todo.map ( (item,idx) =>
            selectSide[0].id === item.sideID
              ? <ul key={idx} >
                  <li>
                    <TodoSelect showSelectTodoItem={showSelectTodoItem} toggleVisibility={toggleVisibility} title={item.title} id={item.id} status={item.done} onTodoDone={onTodoDone}/>
                  </li>
                </ul> 
              : null )
          } 
        </div>
        <div className={`todo-update todo-update-area ${isVisible ? 'show' : ''}`}>
            <input type="text"
            onChange={handleTodoUpdate}
            />
            <div className='todo-update-btn'>
              <button onClick={handelDel}>삭제</button>
            </div>

        </div>
      </div>

    </div>
  )
}
