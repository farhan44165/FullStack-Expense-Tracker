import { useState } from "react";

const Header = ({ onToggleHistory, showHistory, onClearHistory }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6 relative">
      <h1 className="text-3xl font-bold text-black">Expense Tracker</h1>

      {/* Menu Icon */}
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-black text-3xl focus:outline-none hover:text-blue-800"
        >
          ☰
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded text-sm z-50">
            <button
              onClick={() => {
                onToggleHistory();
                setShowMenu(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {showHistory ? "Hide History" : "Show History"}
            </button>

            <button
              onClick={() => {
                onClearHistory();
                setShowMenu(false);
              }}
              className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
            >
              Clear History
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
