function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            C
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              CivicMind AI
            </h1>

            <p className="text-xs text-gray-500">
              Smart City Intelligence
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Features
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-gray-300 px-5 py-2">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;