import { useEffect, useState } from 'react'
import './App.css'
import Userlist from './components/Userlist'
import UserForm from './components/UserForm';

function App() {

  const [users, setUsers] = useState();

  useEffect(()=>{
    setUsers([
      { id: 1, name: "Alice", age: 23 },
      { id: 2, name: "Bob", age: 27 },
      { id: 3, name: "Charlie", age: 21 },
      { id: 4, name: "Dave", age: 29 },
      { id: 5, name: "Eve", age: 25 }
    ])
  },[]);

  const AddList = (name, age) => {
    setUsers(prev => [...prev, {
      id: Date.now(),
      name: name,
      age: age,
  }
  ]
  );
  }

  const handleRemove = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <>
      <UserForm AddList={AddList} />
      <Userlist users={users} handleRemove={handleRemove} />
    </>
  )
}

export default App
