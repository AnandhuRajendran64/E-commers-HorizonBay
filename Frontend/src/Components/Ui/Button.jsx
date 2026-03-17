import React from 'react'

const Button = ({
  children,
type = "button",
onClick,
disabled = false,
className = ""}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className = {`text-white bg-gray inline-flex items-center box-border border border-transparent hover:bg-gray-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none ${className}`}>
      {children}
    </button>
  )
}

export default Button
