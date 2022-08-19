import React, { useRef } from 'react';
import './InputFeild.css';

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
export const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef=useRef<HTMLInputElement>(null);
  return (
    <div>
      <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        
        }}> 
        <input type="input" name="" 
          value={todo} 
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)} 
          placeholder='Enter a task'
          className='input_box' id="" />
        <button className='input_submit'
          type='submit'>Go</button>
      </form>
    </div>
  )
}
