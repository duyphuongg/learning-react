import "./App.css";
import { useState } from "react";

function AddUser(props) {
  const [user, setUser] = useState("");
  function handleChange(e) {
    setUser(e.target.value);
  }
  function handleAddUser(e) {
    props.handleAddUser(user)
    setUser("")
    e.preventDefault();
    
  }
  return (
    <div className="add-user-wrap">
      <input value={user} placeholder="Add new user" onChange={handleChange} />
      <button onClick={handleAddUser}>Add</button>
    </div>
  );
}

function ListUser(props) {
  const user = props.users.map((item, index) => (
    <li key={index}>{ item }</li>
  ))
  return <ul>{ user }</ul>
}

const users = ["Phuong", "Test", "New"]
function App() {
  const [dataUser, setDataUser] = useState(users)
  function handleDataUser(item) {
    setDataUser([...dataUser, item])
  }
  return (
    <div className="App">
      <AddUser handleAddUser={ handleDataUser } />
      <ListUser users={ dataUser } />
    </div>
  );
}

export default App;
