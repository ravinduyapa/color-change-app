import Input from "./Input";
import Square from "./Square";
import { useState } from "react";

function App() {

  const [colorValue,setColorValue]=useState('')
  const [hexValue,setHexValue]=useState('')
  const [isDarkSet,setIsDarkSet]=useState('')
  return (
    <div className="App">
      <Square 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkSet={isDarkSet}
      />

      <Input 
      colorValue={colorValue}
      setColorValue={setColorValue}
      hexValue={hexValue}
      setHexValue={setHexValue}
      isDarkSet={isDarkSet}
      setIsDarkSet={setIsDarkSet}
      />
    </div>
  );
}

export default App;
