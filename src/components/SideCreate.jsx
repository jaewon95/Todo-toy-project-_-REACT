
import './SideCreate.css'
import { useRef } from 'react';
import useStore from './store/sideStore';

export const SideCreate = () => {

    const textRef = useRef();
    const onSideCreate = useStore(state => state.onSideCreate)

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSideCreate(textRef.current.value);
        textRef.current.value = '';
        textRef.current.focus();
    }

  return (
    <form className="side-create-form" onSubmit={handleSubmit}>
        <label htmlFor="f-title">TODO MAIN ✅</label>
        <div>
            <input type="text" id="f-title" maxLength={12} ref={textRef} /> 
            <button className='btn' >📝</button>
        </div>
    </form>
  )
}
