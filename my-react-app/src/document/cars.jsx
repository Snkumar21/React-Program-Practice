function MyCars() {
  const cars = ['Volvo', 'BMW', 'Ford'];
  return (
    <>
      <h2>My Favorite Cars</h2>          
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  );
}

export default MyCars;