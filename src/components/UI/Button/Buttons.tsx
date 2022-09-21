import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import classes from './style.module.scss'

interface IButton {
  children: ReactNode
  onClickHandler?: () => void
  showIcon?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

const Button: FC<IButton> = ({ children, onClickHandler, showIcon, type = 'button' }) => {
  return (
    <button
      type={type}
      className={classes.button}
      onClick={onClickHandler}
    >
      {showIcon && '🎉'} {children}
    </button>
  )
}

export default Button