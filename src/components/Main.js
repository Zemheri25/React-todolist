import React from "react";
import { useState } from "react";
import Item from "./Item";

function Main() {
  const [button, setButton] = useState("Close Add Task Bar");
  const [value, setValue] = useState(true);
  const [form, setFrom] = useState({});
  const [item, setItem] = useState([]);

  const handleClick = () => {
    if (button == "Close Add Task Bar") {
      setButton("Show Add Task Bar");
      setValue(false);
    } else {
      setButton("Close Add Task Bar");
      setValue(true);
    }
  };
  const addItem = () => {
      console.log(item);
    setItem([...item, form]);
  };

  const handleChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  if (value) {
    return (
      <div>
        <button onClick={handleClick} className = "showbutton">{button}</button>
        <br />
        <label htmlFor="Task">Task</label>
        <br />
        <input
          type="text"
          name="Task"
          id="Task"
          value={form.Task}
          onChange={handleChange}
        />

        <br />
        <br />
        <label htmlFor="Date">Day & Time</label>
        <br />
        <input
          type="date"
          name="Date"
          id="Date"
          onChange={handleChange}
          value={form.Date}
        />
        <br />
        <br />
        <button onClick={addItem} className = "addbutton">ADD</button>
        <div>
            {item.map((item, index) => {
                return <Item key={index} item = {item}/>
            })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleClick} className = "showbutton">{button}</button>
      {item.map((item, index) => {
          return <Item item = {item} key={index}/>
      })}
    </div>
  );
}

export default Main;
