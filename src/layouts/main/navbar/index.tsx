'use client'
import clsx from 'clsx'
// import DarkModeToggleBtn from '@/layouts/main/navbar/DarkModeToggleBtn'
import Link from 'next/link'
import { FaLaptopCode, FaUser } from 'react-icons/fa'

const MainNavbar = () => {
  return (
      <header
          className={clsx([
            'bg-gradient-to-r from-purple-100 to-white shadow-lg',
            'dark:from-purple-950 dark:to-black',
            'z-50 fixed top-0 inset-x-0 h-[60px]',
          ])}
      >
        <div className="h-full container flex items-center gap-8 justify-between">
          <Link href="/" className="font-extrabold text-gray-800 dark:text-white flex items-center gap-2">
            <FaLaptopCode className="text-xl inline"/>
            <span>
              Guardamelo Blog
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              Cognitus
            </span>
            <FaUser className="inline"/>
            {/*<DarkModeToggleBtn/>*/}
          </div>
        </div>
      </header>
  )
}

export default MainNavbar