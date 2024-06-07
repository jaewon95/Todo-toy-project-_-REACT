import {create} from 'zustand'
import sideStore from './sideStore'; // sideStore를 import

const todoStore = create((set)=>({

    todo : [],
    showTodoForm:false,
    
    onToggleTodoStatus : ()=>{
        set((state)=> ({
            showTodoForm : !state.showTodoForm
        }))
    },

    
    // todo form 보여주기
    onShowTodoForm : (id)=>{
        
        const onShowSideForm = sideStore.getState().onShowSideForm; 
        const sideStatus = sideStore.getState().showSideStatus;
        const selectSide = sideStore.getState().selectSide;
        
        if(sideStatus){
            onShowSideForm(); // false
        }
        
        set(()=>({
            showTodoForm : true,
        }))

        if(selectSide.length !== 0){
            // sideID = selectSide[0].id
        }
    },


    // todo 생성
    onTodoCreate : (content, sideID)=>{
        if(content.length === 0) {
            return;
        }

        set((state)=>({
            todo : [
                ...state.todo, 
                {
                    id : new Date().toISOString(),
                    title : content,
                    sideID : sideID,
                    done : false,
                }
            ]
        }))
    },


    // todo 완료 !done
    onTodoDone : (id)=>{
        set((state)=>({
            todo : state.todo.map( item => 
                item.id === id ? { ...item, done : !item.done } : item
            )
        }))
    }, 

    // todo 내용 수정
    onTodoUpdate : (id, content) => {
        if(content.length > 12){
            return;
        }

        set((state)=>({
            todo : state.todo.map( item =>
                item.id === id ? {...item, title: content } : item 
            )
        }))
    },

    // todo 삭제
    onTodoDel : (id)=>{
        set((state)=>({
            todo : state.todo.filter( item => item.id !== id)
        }))
    }



}))



export default todoStore;
