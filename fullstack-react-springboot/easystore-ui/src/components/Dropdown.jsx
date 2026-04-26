import React from 'react'

function Dropdown({label, options, selectedValue}) {
  return (
    <div className='flex items-center gap-2 justify-end pr-12 flex-1 font-primary'>
        <label className='text-lg font-semibold text-primary'>{label}</label>
        <select className='px-4 py-2 text-base border rounded-md transition border-primary focus:ring' value={selectedValue}>
            {options.map((option, index) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown
