import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai"; 

interface DropdownMenuProps {
  label: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, value, onChange }) => {
 
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
  <button
    onClick={toggleDropdown}
    className="flex items-center px-3 py-2 sm:px-4 sm:py-3 bg-gray-200 rounded hover:bg-gray-300"
  >
    {label}: {value}
    <AiOutlineDown className="ml-2 text-gray-600" />
  </button>

  {isOpen && (
    <div className="absolute left-0 mt-2 w-full sm:w-48 bg-white rounded shadow-lg z-10">
      <ul className="text-gray-700">
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onChange(item);
              setIsOpen(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

export default DropdownMenu;
