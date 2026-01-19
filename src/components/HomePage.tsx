import React from 'react';


// Define the functional component using an arrow function
// Specify the prop types using the interface defined above
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome!</h1>
      </header>
      <main>
        <p>This is your simple home page built with React and TypeScript.</p>
      </main>
      <footer>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  );
};

// Export the component for use in other files
export default HomePage;