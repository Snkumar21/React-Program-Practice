import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Example of basic...
/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

// Example of rendering with createRoot function...
/*createRoot(document.getElementById('root')).render(
  <h1> Hello World </h1>
)*/

// Example of render method...
/*createRoot(document.getElementById('root')).render(
  <p>Welcome!</p>
)*/

// Example of Html Code rendering...
/*const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <th>Nitish</th>
    </tr>
    <tr>
      <th>Singh</th>
    </tr>
  </table>
)
createRoot(document.getElementById('root')).render(
  myelement
)*/

// Example of map() in react...
/*const fruitlist = ['apple', 'banana', 'cherry'];

function MyList() {
  return (
    <ul>
      {fruitlist.map(fruit => 
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <MyList />
)*/

// Example of map() with object...
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function UserList() {
  return (
    <ul>
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <UserList />
)