'use client'
// import clsx from 'clsx'
// import DarkModeToggleBtn from '@/layouts/main/navbar/DarkModeToggleBtn'
import Link from 'next/link'
import { FaLaptopCode, FaUser } from 'react-icons/fa'

const items = [
  {
    to: '/',
    name: 'Guías',
  },
  {
    to: '/challenges',
    name: 'Retos',
  },
]

const MainNavbar = () => {
  return (
      <header
          className="z-50 fixed top-0 inset-x-0 h-[60px] bg-neutral-50 dark:bg-neutral-900 border-b-2 border-neutral-200 dark:border-neutral-700">
        <div className="h-full container flex items-center gap-8 justify-between  rounded-br-2xl">
          <Link href="/" className="font-extrabold text-purple-800 dark:text-purple-600 flex items-center gap-2">
            <FaLaptopCode className="text-xl inline"/>
            <span>
              Guardamelo Blog
            </span>
          </Link>

          <div className="flex gap-4 md:gap-8">
            {
              items.map(item => (
                  <Link key={item.to} href={item.to}
                        className="inline-block font-semibold text-sm hover:text-purple-600">
                    {item.name}
                  </Link>
              ))
            }
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              Cognitus
            </span>
            <FaUser className="inline text-purple-800 dark:text-purple-600"/>
            {/*<DarkModeToggleBtn/>*/}
          </div>
        </div>
      </header>
  )
}

export default MainNavbar