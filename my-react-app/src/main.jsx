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
/*class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of the componentDidMount()
/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of the getDerivedStateFromProps() method
/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header favcol="yellow" />
);*/

// Example of the shouldComponentUpdate() method returns true instead
/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of React Props
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);*/

// Example of myobj instead of props
/*function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);*/

// Example of Pass Multiple Properties
/*function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);*/

// Example of Different Data Types
/*function Car(props) {
  return (
    <h2>The car is from {props.year}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car year={1969} />
);*/

// Example of Variables has to be sent inside curly brackets
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

let x = "Ford";

createRoot(document.getElementById('root')).render(
  <Car brand={x} />
);*/

// Example of Objects and Arrays has to be sent inside curly brackets
/*function Car(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);*/

// Example of Use the dot notation to access object properties.
/*function Car(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);*/

// Example of Use the indexes to access array properties
/*function Car(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo = ["Ford", "Mustang"];

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);*/

// Example of Send the brand attribute from the Garage component to the Car component
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);*/

// Example of Destructuring Props
/*function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);*/

// Example of Use the brand attribute in the Car component.
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);*/

// Example of use myobj instead of props in the component.
/*function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);*/

// Example of Use the property values in the Car component.
/*function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);*/

// Example of Numbers has to be sent inside curly brackets to be treated as numbers.
/*function Car(props) {
  return (
    <h2>The car is from {props.year}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car year={1969} />
);*/

// Example of Variables has to be sent inside curly brackets.
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

let x = "Ford";

createRoot(document.getElementById('root')).render(
  <Car brand={x} />
);*/

// Example of Objects and Arrays has to be sent inside curly brackets
/*function Car(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);*/

// Example of Use the dot notation to access object properties.
/*function Car(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);*/

// Example of Use the indexes to access array properties
/*function Car(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo = ["Ford", "Mustang"];

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);*/

// Example of Send the brand attribute from the Garage component to the Car component.
/*function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);*/

// Example of the component knows it only need the color property, so in the function definition, it only specifies that.
/*function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);*/

// Example of The component receives all the properties, but uses destructuring to limit the properties inside the component.
/*function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);*/

// Example of The component specifies the color and the brand, but the rest is stored in an object like this.
/*function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);*/

// Example of Set the default color value to "blue"
/*function Car({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);*/

// Example of Props Children.
function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Parent />
);