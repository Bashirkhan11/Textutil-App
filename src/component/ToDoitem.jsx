import React, { useState } from "react";
import ToDoli from "./ToDoli";

export default function ToDoitem() {
  const [item, setItem] = useState("");
  const [text, setText] = useState([]);
//   const findindex = text.;

  const handleclick = (event) => {
    setText((p) => {
      return [...p, item];
    });
    event.preventDefault();
    setItem("");
  };

  const handle = (event) => {
    const newitem = event.target.value;
    setItem(newitem);
  };

  const deletei = (id) => {
        console.log(id);
        setText(p => {
            return p.filter((item, index)=>{
                return index !== id
            })
        });
  };

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            onChange={handle}
            value={item}
            className="form-control"
            id="input"
            placeholder="Add item"
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            onClick={handleclick}
            className="btn btn-primary mb-3"
          >
            Add Item
          </button>
        </div>

        <div style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">    
            {
              text.map((todoitem, index) =>{
               return <ToDoli key ={index} id ={index} text ={todoitem} click={deletei} />
              })
            }
        </ul>
        </div> 
      </form>
    </div>
  );
}
