import React from 'react';
import './InputFeild.css';

export const InputFeild = () => {
  return (
    <div>
      <form className='input'>
        <input type="input" name="" placeholder='Enter a task' className='input_box' id="" />
        <button className='input_submit' type='submit'>Go</button>
      </form>
    </div>

  )
}
