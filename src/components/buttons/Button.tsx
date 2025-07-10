import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string
}

const Button = ({ children, className, ...rest }: Props) => {
  return (
      <button
          {...rest}
          className={clsx([
            'bg-purple-800 text-white font-bold text-sm py-2 px-4 rounded-lg',
            'hover:cursor-pointer hover:bg-purple-700 transition-colors',
            'dark:bg-purple-600 active:scale-[0.95] transition-transform duration-300',
            className,
          ])}
      >
        {children}
      </button>
  )
}

export default Button