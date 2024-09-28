/* eslint-disable react/prop-types */

import { useState } from 'react';

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className=" inline-block , relative">
      <button onClick={handleToggle} className=" border-none hover: cursor-pointer">
        {label}
      </button>
      {isOpen && (
        <ul className=" absolute bg-white border-sm z-1 m">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
