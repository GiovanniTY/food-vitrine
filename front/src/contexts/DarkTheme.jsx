import React, { useState, useEffect, createContext, useContext } from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-16 rounded-full bg-gray-200 dark:bg-gray-600 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div
        className={`absolute inset-y-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
      <div className="flex w-full h-full items-center justify-between px-1">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Moon className="h-4 w-4 text-blue-500" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}