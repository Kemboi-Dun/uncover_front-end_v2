import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="write_container">
      <div className="write_menu">
        <div className="item_2">
          <h1>Select Category</h1>
          <div className="radio_items">
            <div className="item_radio">
              <input type="radio" value="tech" name="cat" id="tech" />
              <label htmlFor="tech">Technology</label>
            </div>

            <div className="item_radio">
              <input type="radio" value="art" name="cat" id="art" />
              <label htmlFor="art">Art</label>
            </div>

            <div className="item_radio">
              <input type="radio" value="music" name="cat" id="music" />
              <label htmlFor="music">Music</label>
            </div>

            <div className="item_radio">
              <input type="radio" value="food" name="cat" id="food" />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
        <div className="item_1">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>
            <select name="status" id="">
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
            </select>
          </span>
          <span>
            <b>Visibility: </b>
            <select name="visibility" id="">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <i class="fa-solid fa-upload"></i>
            <p>Select Image</p>
          </label>
          <div className="buttons">
            <button className="publish">
              <span>Post</span>
            </button>
            {/* <button className="update">Update</button> */}
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>

      <div className="write_content">
        <input type="text" placeholder="Enter Title" />
        <div className="write_editor">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Write;
