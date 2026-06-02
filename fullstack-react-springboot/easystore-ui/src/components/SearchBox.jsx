import React from "react";

function SearchBox({ label, placeholder, value, handleSearch }) {
  
    return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-lighter">
        {label}
      </label>
      <input
        type="text"
        className="px-4 py-2 text-base border rouded-md transition border-primary focus:ring dark:border-light focus:outline-none focus:ring-primary dark:bg-darkbg dark:text-light dark:focus:ring-light"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
