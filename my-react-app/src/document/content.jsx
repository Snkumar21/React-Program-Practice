function Content() {
  return (
    <main style={{
      flex: 1,
      padding: '20px',
      background: 'white',
      borderRadius: '8px',
      marginLeft: '20px'
    }}>
      <h2>Welcome to Our Site</h2>
      <article style={{ marginBottom: '20px' }}>
        <h3>Latest News</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
           tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      
      <article>
        <h3>Featured Content</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat.</p>
      </article>
    </main>
  );
}

export default Content;