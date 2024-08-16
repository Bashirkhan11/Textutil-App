import React, { useState } from "react";
// import Button from "./button";
// import PropTypes from 'prop-types'

function Text(props) {
  const [value, setValue] = useState();

  const capatil = () => {
    const uper = value.toUpperCase();
    setValue(uper);
  };

  const lower = () => {
    const lower = value.toLowerCase();
    setValue(lower);
  };
  const clear = () => {
    setValue("");
  };

  const valll = (event) => {
    const vall = event.target.value;
    setValue(vall);
  };

  const removespace = () => {
    const newText = value.trim().replace(/\s+/g, " ");

    setValue(newText);
  };

  const copytext= () => {
    navigator.clipboard.writeText(value)
      .then(() => {
       alert('Text copied to clipboard');
      })
      .catch((err) => {
        alert('Failed to copy text: ', err);
      });
  };

  return (
    <div className="container">
      <div className="form-floating">
        <h1 style={{ color: props.background === "dark" ? "white" : "black" }}>
          Enter Your Text
        </h1>
        <textarea
          className="form-control "
          onChange={valll}
          value={value}
          style={{
            height: "200px",
            backgroundColor: props.background === "light" ? "white" : "gray",
            color: props.background === "light" ? "black" : "white",
          }}
          id="floatingTextarea2"
        />

        {/* <Button click={capatil} /> */}

        <div className="container my-4 ">
          <button
            type="button"
            onClick={capatil}
            className="btn btn-primary mx-1"
          >
            Capitalize
          </button>
          <button
            type="button"
            onClick={lower}
            className="btn btn-primary mx-1"
          >
            Lower Case
          </button>
          <button
            type="button"
            onClick={clear}
            className="btn btn-primary mx-1"
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={removespace}
            className="btn btn-primary my-2 mx-1"
          >
            Remove Space
          </button>
          <button
            type="button"
            onClick={copytext}
            className="btn btn-primary my-2 mx-1"
          >
            Copy Text
          </button>
        </div>
      </div>

      <div className="container">
        <h3 style={{ color: props.background === "dark" ? "white" : "black" }}>
          {value}
        </h3>
      </div>
    </div>
  );
}

// text.propTypes = {

// }

export default Text;
