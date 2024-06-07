import { create } from 'zustand';

// const [side, setSide] = useState([]);
// const [showForm, setShowForm] = useState(false);

// const [todo, setTodo] = useState([]);
// const [showTdForm, setShowTdForm] = useState(false);




const useStore = create(set => ({
  
  side : [],
  setSide : newSide=>set({side : newSide}),
  showForm: false,
  setShowForm:value => set({ showForm: value }),

  todo: [],
  setTodo: newTodo=>set({ todo: newTodo }),
  showTdForm: false,
  setShowTdForm: value=> set({ showTdForm: value }),


  // side 생성
  onCreate : (content) => {
    if(content.length === 0) {
      return;
    }

    set((state) => ({
      side: [...state.side, { id: new Date().toISOString(), title: content }],
    }));
  
  },

  // 삭제
  onDel : (id)=> {
    set((state)=>({
      side : state.side.filter(item => item.id !== id)
    }))
  }
  


  // // side 삭제
  // const onDelSide = (id) => {
  //   console.log('삭제 ',id);
  //   setSide( 
  //     side.filter(item => item.id !== id)
  //   )
  // }

  // // side 생성 Form 보여주기
  // const onShowForm=()=>{ // form on, off
  //   setShowForm(!showForm)
  //   if(showTdForm) {
  //     setShowTdForm(!showTdForm)
  //   }
    
  // }

  // // todo 생성하기
  // const onTodoCreate=(content,sideID)=>{

  //   if(content.length === 0) {
  //     return;
  //   }

  //   setTodo(
  //     [ ...todo,
  //       {
  //         id : new Date().toISOString(),
  //         title : content,
  //         sideID : sideID,
  //         done : false,
  //       }
  //     ]
  //   )
  // }

  // // todo 완료 map => !done
  // const onTodoDone=(id)=>{
  //   setTodo( 
  //     todo.map(item => 
  //       item.id === id ? {...item, done: !item.done } : item 
  //     )
  //   )
  // }

  // // todo title 수정 map. title => title
  // const onTodoUpdate=(id,content)=>{ // 미구현

  //   if(content.length > 12){
  //     return;
  //   }
  //   setTodo( 
  //     todo.map(item => 
  //       item.id === id ? {...item, title: content } : item 
  //     )
  //   )
  // }

  

  // // todo 삭제 . filter !==  미구현
  // const onTodoDel=(id)=>{
  //   setTodo(
  //     todo.filter( item => item.id !== id)
  //   )
  // }

  // // todo 만들기 form 보여주기 + 선택된 side setShowTdForm() 로직
  // const onShowTodoForm = (id)=>{

  //   if(showForm){ // side 생성 form 숨기기
  //     setShowForm(!showForm)
  //   }

  //   setShowTdForm(
  //     [
  //       {
  //         sideID : id,
  //         show : true
  //       },
  //     ]
  //   )
  // }






  })
)

export default useStore;