import React from 'react';
import { createRoot } from 'react-dom/client'
import Car from './document/vehicle.jsx';
import './index.css'

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
/*const users = [
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
)*/

// Example of map() parameters
/*const fruitlist = ['apple', 'banana', 'cherry'];
function MyApp() {
  return (
    <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Number: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  );
}
createRoot(document.getElementById('root')).render(
  <MyApp />
)*/

// Example of using Props Destructuring...
/*function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
  
createRoot(document.getElementById('root')).render(
  <Greeting name="Nitish" age={23} />
);*/

// Example of useState Hook Destructuring...
/*export function Counter() {
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);*/

// Example of JSX in react.
/*const myElement = <h1>I Love JSX!</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of without JSX in react.
/*const myElement = React.createElement('h1', {}, 'I do not use JSX!');

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of Expression in JSX.
/*const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of inserting a larger block of HTML.
/*const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of One Top Level Element.
/*const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of Wrap two paragraphs inside a fragment.
/*const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of elements must be closed.
/*const myElement = <input type="text" />;

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of attribute className instead of class in JSX.
/*const myElement = <h1 className="myclass">Hello World</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of Comments in JSX.
/*const myElement = <h1>Hello { Wonderful } World </h1>;

createRoot(document.getElementById('root')).render(
  myElement
);*/

// Example of JSX in React Components.
/*function Car() {
  return (
    <>
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of React JSX Expressions...
/*function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of variables in JSX.
/*function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Function calls in JSX.
/*function kwtohp(kw) {
  return kw * 1.36;
}

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Object Properties in JSX.
/*function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of camelCase event attributes.
/*function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Boolean Attributes in React.
/*function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc} disabled>Click me</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Boolean Attribute return False.
/*function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc} disabled={false}>Click me</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of style attribute
/*function Car() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of React JSX IF Statement
/*function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Fruit />
);*/

/*function Fruit() {
  const x = 5;
  return (
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Fruit />
);*/

// Example of Rendering a Component.
/*function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Props
/*function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car color="red"/>
);*/

// Example of components in components.
/*function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);*/

// Example of rendering a component twice.
/*function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <Car />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);*/

// Example of rendering a component twice with different names.
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      <Car brand="BMW" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);*/

// Example of Components in file.
/*createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Display of Car components in the root element.
/*class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Component Constructor
/*class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Props
/*class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car color="red"/>
);*/

// Example of Props in the Constructor
/*class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car model="Mustang"/>
);*/

// Example of Components in Components.
/*class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Garage />
);*/

// Example of Components in Files.
/*createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Using of state Object
/*class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);*/

// Example of Changing the state Object
/*class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Car />
)*/

// Example of The Constructor method.
/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
)*/

// Example of The getDerivedStateFromProps method
/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header favcol="yellow"/>
);*/

// Example of simple component with a simple render() method
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);