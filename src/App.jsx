import React from "react";
import "./App.css";
import Input from "./Input";
import { useId } from "react";
import List from "./List";

// TODO: Styling
export default function App() {
  let localList = JSON.parse(localStorage.getItem("list"));
  const [newItem, setNewItem] = React.useState("");
  const [list, setList] = React.useState([]);
  const [idCounter, setIdCounter] = React.useState(0);
  React.useEffect(() => {
    setList(localList);
  }, []);
  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    if (newItem != "") {
      setList((p) => [
        {
          title: newItem,
          id: idCounter,
          checked: false,
        },
        ...p,
      ]);
      setNewItem("");
      setIdCounter((p) => (p += 1));
    }
  }
  function handleCheck(id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        const newList = list.filter((items) => items.id != id);
        const checkedItem = {
          title: list[i].title,
          checked: !list[i].checked,
          id: list[i].id,
        };
        newList.push(checkedItem);
        setList(newList);
      }
    }
  }

  function handleDelete(id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        setList((p) => p.filter((item) => item.id != id));
      }
    }
  }
  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="container">
      <div className="input">
        <Input
          addItem={addItem}
          handleChange={handleChange}
          newItem={newItem}
        />
      </div>
      <div className="todo">
        <List
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          list={list}
        />
      </div>
    </div>
  );
}
