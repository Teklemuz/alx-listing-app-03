import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <nav className="flex space-x-4">
          <button>Sign In</button>
          <button>Sign Up</button>
        </nav>
        <div>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
}

export default Header;
