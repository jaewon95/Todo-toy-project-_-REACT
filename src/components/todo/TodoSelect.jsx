export const TodoSelect = ({title,id,status,onTodoDone,toggleVisibility,showSelectTodoItem}) => {
    
    const handleUpdate = () =>{
      onTodoDone(id);
    }

    const onClickTodoBtn =(e)=>{
      toggleVisibility()
      showSelectTodoItem(e.target.id)
    }

  return (
    <>  
        <input type="checkbox" onChange={handleUpdate} checked={status}/>
        <p>{title}</p>
        <button className='todo-btn' id={id} onClick={onClickTodoBtn}>EDIT</button>
    </>
  )
}
