import React from "react";

function SearchBox({ label, placeholder, value }) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary">{label}</label>
      <input
        type="text"
        className="px-4 py-2 text-base border rouded-md transition border-primary focus:ring"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default SearchBox;
