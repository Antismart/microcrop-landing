const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Dashboard', 'Policies', 'Pools', 'Weather'];
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <a 
            key={item} 
            href="#" 
            className="text-gray-300 hover:text-green-400 transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};