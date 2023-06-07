
import React, { useState } from "react";

const App = () => {
  
  const [inputValue, setInputValue] = useState("pedro");
  let onChange = (event)=>{
    const newValue = event.target.value;
    setInputValue(newValue)
  };
  

  return (
    <div>
      <input placeholder="enter someting.."onChange={onChange}/>
      {inputValue}
    </div>
  );
};

export default App;






