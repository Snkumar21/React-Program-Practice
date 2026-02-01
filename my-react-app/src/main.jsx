import React from 'react';
import { createRoot } from 'react-dom/client'
//import Car from './document/vehicle.jsx';
import { createPortal } from 'react-dom';
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
/*function Son(props) {
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
);*/

// Example of shoot function inside the Football component.
/*function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Football />
);*/

// Example of Send "Goal!" as a parameter to the shoot function, using arrow function.
/*function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Football />
);*/

// Example of Arrow Function.
/*function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Football />
)*/

// Example of the if JavaScript operator to decide which component to render.
/*function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);*/

// Example of Try changing the isGoal attribute to true.
/*function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={true} />
);*/

// Example of right side of && will only be rendered if the left side is true.
/*function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}</h1>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);*/

// Example of Try emptying the brand property.
/*function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}</h1>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component.
/*function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);*/

// Example of create a simple list using the map() method.
/*function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);*/

// Example of Keys in React Lists.
/*function MyCars() {
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);*/

// Example of Using array indexes as keys (not recommended for dynamic lists).
/*function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);*/

// Example of Add a form that allows users to enter their name.
/*function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of Use the useState Hook to manage the input.
/*function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of Use initial value for name
/*function MyForm() {
  const [name, setName] = useState("John");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of React Form Submit.
/*function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of React uses the value attribute to control the textarea.
/*function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }

  return (
    <form>
      <label>Write here:
        <textarea
          value={mytxt}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {mytxt}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of React Form Select.
/*function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of Use the useState Hook to manage the input.
/*function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
        </label>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of Use initial values for firstname and lastname
/*function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    lastname: 'Doe'
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
        </label>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of React uses the checked attribute to control the checkbox.
/*function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of Use initial values for the input fields.
/*function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    tomato: true,
    onion: false
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of React Forms - Radio
/*function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);*/

// Example of Creating a Modal with Portal
/*function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function MyApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyApp />
)*/

// Example of Event Bubbling in Portals
/*function PortalButton({ onClick, children }) {
  return createPortal(
    <button 
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: 'blue',
        color: 'white'
      }}>
      {children}
    </button>,
    document.body
  );
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c + 1);
      }}>
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>      
      <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
      <p>Try to click the div element as well, to see the count increase</p>
      
      <PortalButton
        onClick={(e) => {
          // This runs first
          setCount2(c => c + 1);
        }}>
        Floating Button
      </PortalButton>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Using Suspense
/*import MyFruits from './Fruits';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFruits />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Using Suspense without lazy Loading.
/*import Cars from './Cars';
// Click the "cars.jsx" tab to see the content of the "Cars.jsx" file

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Using Suspense without lazy Loading.
/*import { Suspense, lazy } from 'react';

const Cars = lazy(() => import('./Cars'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Multiple Components.
/*import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));
const Sidebar = lazy(() => import('./Sidebar'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Content />
        </div>
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Inline Styling
/*const Header = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of camelCased Property Names.
/*const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of JavaScript Object
/*const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of CSS Stylesheet
/*import './MyStylesheet.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);*/

// Example of import styles to import the stylesheet
/*import styles from './my-style.module.css'; 
  
const Car = () => {
  return <h1 className={styles.bigred}>Hello Car!</h1>;
}
  
createRoot(document.getElementById('root')).render(
  <Car />
);*/

// Example of Using a CSS Module.
/*import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.mybutton}>
        My Button
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Multiple Classes
/*import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={`${styles.mybutton} ${styles.primary}`}>
        My Primary Button
      </button>
      <br/>
      <br/>
      <button className={`${styles.mybutton} ${styles.secondary}`}>
        My Secondary Button
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Composing Classes.
/*import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <br/>
      <br/>
      <button className={styles.secondary}>
        Secondary Button
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Global Classes
/*import styles from './BlueHeader.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Combine Global and Local Classes
/*import styles from './MyStyles.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
      <p className={styles.myparagraph}>
        My Paragraph
      </p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of CSS-in-JS.
/*import styled from 'styled-components';

const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

function App() {
  return (
    <>
      <MyHeader>Welcome!</MyHeader>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Props in Styled Components.
/*import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Extending Styles.
/*import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

const SuccessButton = styled(Button)`
  background-color: #28a745;
`;

function App() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Global Styles.
/*import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
  }

  .myparagraph {
    font-family: courier, monospace;
    color: blue;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome!</h1>
      <p className="myparagraph">This paragraph is styled with global styles.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Basic Routing.
/*import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      { Navigation }
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      { Routes }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Nested Routes.
/*import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/car">Cars</Link> |{" "}
        <Link to="/products/bike">Bikes</Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      { Navigation }
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      { Routes }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Style Active Links.
/*import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      { Navigation with NavLink for active styling }
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>

      { Routes }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of URL Parameters.
/*import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link>
      </nav>

      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Transitions.
/*import { useState, useTransition } from 'react';

function SearchBar() {
  const [text, setText] = useState('');
  const [results, setResults] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input right away
    setText(e.target.value);

    // Non-urgent: Update search results
    startTransition(() => {
      setResults(e.target.value);
    });
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <p>Search results for: {results}</p>
      )}
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <SearchBar />
);*/

// Example of Real-World Example of Transitions.
/*import { useState, useTransition } from 'react';

function SearchResults({ query }) {
  // Simulate slow search results
  const items = [];
  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(<li key={i}>Result for {query} - {i}</li>);
    }
  }
  return <ul>{items}</ul>;
}

function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input field
    setInput(e.target.value);
    
    // Non-urgent: Update search results
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
        placeholder="Type to search..."
      />
      {isPending && <p>Loading results...</p>}
      <SearchResults query={query} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of forwardRef.
/*import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Higher Order Component.
/*// A HOC that adds a border to any component
function withBorder(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Simple component without border
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Create a new component with border
const GreetingWithBorder = withBorder(Greeting);

function App() {
  return (
    <div>
      <Greeting name="John" />
      <GreetingWithBorder name="Jane" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);*/

// Example of Import the Sass file.
/*import './MyStyle.scss';

function MyHeader() {
  return (
    <h1>My Header</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <MyHeader />
);*/

// Example of Sass Modules
/*import './MyStyle.scss';

function MyHeader() {
  return (
    <div>
    <h1>My Header 1</h1>
    <h2>My Header 2</h2>
    <h3>My Header 3</h3>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyHeader />
);*/

// Example of React Hook.
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);