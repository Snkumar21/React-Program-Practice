function fetchFruitData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Apple', 'Banana', 'Cherry']);
    }, 2000);
  });
}

let fruitResource = {
  data: null,
  read() {
    if (this.data !== null) return this.data;
    throw fetchFruitData().then(result => this.data = result);
  }
};

function MyFruits() {
  const fruits = fruitResource.read();
  return (
    <>
      <h2>My Favorite Fruits</h2>          
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default MyFruits;