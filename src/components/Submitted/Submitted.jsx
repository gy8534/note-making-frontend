import React from "react";
import "./Submitted.css";
function Submitted(props) {

  const handleClick1 = () => {
    window.location = `http://localhost:3000/viewnotes/${props.id}`;
  }
  const handleClick2 = () => {
    window.location = '/'
  }
  return (
    <div className="submitted">
      <div className="header">
        <h2>Your Note Succesfully Submitted</h2>
        <p>Copy the link generated below</p>
      </div>

      <div className="submitted-link">
        <div className="link">{`http://localhost:3000/viewnotes/${props.id}`}</div>
      </div>

      <div className="submitted-buttons">
        <span onClick={handleClick1}>View Note</span>
        <span onClick={handleClick2}>Create New Note</span>
      </div>
    </div>
  );
}

export default Submitted;
