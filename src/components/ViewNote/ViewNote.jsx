import React, { useState, useEffect } from "react";
import "./ViewNote.css";

function ViewNote(props) {

  const handleClick = () => {
    window.location = '/'
  }

  const [note, setNote] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/notes/${props.match.params.id}`)
      .then((res) => res.json())
      .then((note) => {
        setNote(note);
      })
      .catch((error) => {
        console.log("Error occured: ", error);
      });
  }, []);
  // props.match.params.id

  return (
    <div className="view-note">
      <h1>View Note</h1>
      <div className="note">
        <div className="title">{note.title}</div>
        <div className="sub-title">
          <p className="author">Author -{note.author}</p>
  <p className="time">time -{note.date}</p>
        </div>

        <div className="body">
          {note.body}
        </div>
      </div>
      <span onClick={handleClick}>New Note</span>
    </div>
  );
}

export default ViewNote;
