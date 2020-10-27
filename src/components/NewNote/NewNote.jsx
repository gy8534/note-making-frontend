import React from "react";
import "./NewNote.css";

class NewNote extends React.Component {
  render() {

    const {values, handleChange, handleClick} = this.props;
    return (
      <div className="new-note">
        <div className="login-box">
          <form>
            <div className="user-box">
              <input type="text" value={values.title} onChange={handleChange('title')} />
              <label>Title</label>
            </div>
            <div className="user-box">
              <input type="text"  value={values.author} onChange={handleChange('author')} />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text"  value={values.body} onChange={handleChange('body')} />
              <label>Note</label>
            </div>
            <span onClick={handleClick}>Submit</span>
          </form>
        </div>
      </div>
    );
  }
}

export default NewNote;
