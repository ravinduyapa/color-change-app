import React from 'react'
import colorNames from 'colornames';

const Input = ({colorValue , setColorValue, setHexValue ,isDarkSet,setIsDarkSet}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name</label>
        <input 
        type="text"
        required
        placeholder='Add Color Name'
        autoFocus
        onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        value={colorValue}
         />

         <button
         type='button'
         onClick={()=> setIsDarkSet(!isDarkSet)}
         >

            Toggle Color

         </button>
        
    </form>
  )
}

export default Input