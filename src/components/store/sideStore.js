import {create} from 'zustand'
import todoStore from './todoStore'

const sideStore = create((set) => ({
    side : [],
    showSideStatus : false,
    selectSide : [],

    // showSideForm : true , false
    onShowSideForm : ()=>{
        const showTodoForm = todoStore.getState().showTodoForm;
        const onToggleTodoStatus = todoStore.getState().onToggleTodoStatus;

        if(showTodoForm){
            onToggleTodoStatus();
        }

        set((state)=>({
            showSideStatus : (!state.showSideStatus)
        }))
    },


    // selectSide +
    onReturnSide : (sideID)=>{
        set((state)=>({
            selectSide : state.side.filter( item => item.id === sideID)
        }))
    },

    // side 생성
    onSideCreate : (content)=>{ 
        if(content.length === 0) {
            return;
          }
        set((state)=>({
            side : [...state.side, 
                { id: new Date().toISOString(), title: content }
            ]}))
        //
    
    },

    // side 삭제
    onSideDel : (id)=>{
        set((state)=>({
            side : state.side.filter(item => item.id !== id)
        }))
    },

    
}))


export default sideStore;