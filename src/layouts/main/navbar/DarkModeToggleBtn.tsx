'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const DarkModeToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setIsDarkMode(theme === 'dark')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return !prev
    })
  }

  return (
      <button
          id="dark-mode-toggle-btn"
          className={clsx([
            'p-2 text-xl bg-neutral-200 rounded-full duration-300',
            'hover:cursor-pointer dark:bg-neutral-700 hover:bg-neutral-300 hover:dark:bg-neutral-600',
          ])}
          onClick={() => toggleDarkMode()}
      >
        {
          isDarkMode ? <MdDarkMode/> : <MdLightMode/>
        }
      </button>
  )
}

export default DarkModeToggleBtn