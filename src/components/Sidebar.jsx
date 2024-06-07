import { SideItem } from './SideItem'
import './Sidebar.css'
import sideStore from './store/sideStore'

export const Sidebar = () => {

  const { side, onSideDel, onShowSideForm } = sideStore((state) => ({
    side: state.side,
    onSideDel: state.onSideDel,
    onShowSideForm : state.onShowSideForm
  }));

  

  return (
    <div className='sidebar'>
        <h1>TODO 🌱</h1>
        <button onClick={onShowSideForm}> + create </button>
        <ul>
          { 
            side.map(item => 
              <SideItem onSideDel={onSideDel} title={item.title} id={item.id} key={item.id} />
            )
          }
        </ul>
    </div>
  )
}
