import React, {useState} from 'react';
import Nav from "./navbar";
import Text from './text';
import ToDoitem from './ToDoitem';


function App(){

    // const dark={
    //     backgroundColor:"gray",
    //     color:"white"
    //   }
    //   const light={
    //     backgroundColor:"light",
    //     color:"black"
    //   }
  
      const [modee, setMode]=useState('light');
     function Update(){
  
          if(modee==='light'){
             setMode('dark');
            document.body.style.backgroundColor="rgb(2 51 100)";
  
          }
          else if(modee==='dark'){
             setMode('light');
             document.body.style.backgroundColor="white";
          }
        }
  
  

    return <div style={{backgroundColor: modee==="dark" ? "rgb(2 51 100)" : "white"}}>
        <Nav mode={modee} update={Update} />
        {/* <Asid /> */}

        <Text background={modee} />
        <ToDoitem />
    </div>
}
export default App;   