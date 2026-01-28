function Header() {
    return (
        <header style={{
            background: '#007bff',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '20px'
        }}>
        <h1>My Website</h1>
        <nav style={{ marginTop: '10px' }}>
            <a href="#" style={{ color: 'white', marginRight: '20px' }}>Home</a>
            <a href="#" style={{ color: 'white', marginRight: '20px' }}>About</a>
            <a href="#" style={{ color: 'white' }}>Contact</a>
        </nav>
        </header>
    );
}

export default Header;