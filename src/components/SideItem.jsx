import React from 'react'
import './SideItem.css'
import todoStore from './store/todoStore'
import sideStore from './store/sideStore'


export const SideItem = ({title,onSideDel, id}) => {

  const {onReturnSide} = sideStore((state)=>({
    onReturnSide : state.onReturnSide
  }))

  const {onShowTodoForm} = todoStore((state)=>({
    onShowTodoForm : state.onShowTodoForm
  }))

  const handleShow=()=>{
    onReturnSide(id);
    onShowTodoForm(id);
  }

  const handleSideItem =()=>{
    onSideDel(id)
  }

  return (
    <li className='side-li' onClick={handleShow}>
      {title} 
      <button className='delete-button' onClick={handleSideItem}>✕</button>
    </li>
  )
}
