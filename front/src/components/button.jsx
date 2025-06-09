"use client"

import React from "react"
import clsx from "clsx"

const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-md hover:bg-[#a83226] transition-colors duration-300",
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
