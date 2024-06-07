import './App.css';

import { Sidebar } from './components/Sidebar';
import sideStore from './components/store/sideStore.js'
import { SideCreate } from './components/SideCreate';
import todoStore from './components/store/todoStore.js';
import { Todo } from './components/todo/Todo.jsx';


function App() {

  const showSideStatus = sideStore(state => state.showSideStatus);
  const {todo,showTodoForm} = todoStore((state)=>({
    todo: state.todo,
    showTodoForm : state.showTodoForm
  }))  

  console.log('렌더링');

  return (
    <div className="App">
      <div className='container'>

        <Sidebar/>
       {showSideStatus && <SideCreate />}
        {showTodoForm &&   
          <Todo todo={todo} />
        }

      </div>
    </div>
  );
}

export default App;
