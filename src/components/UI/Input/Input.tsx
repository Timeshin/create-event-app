import React, { Dispatch, FC, SetStateAction } from 'react'
import { ChangeEvent } from 'react'

import classes from './style.module.scss'

interface IInput {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  type?: string
  placeholder?: string
}

const Input: FC<IInput> = ({ value, onChange, type = 'text', placeholder }) => {
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value)
  }
  
  return (
    <input
      className={classes.input}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default Input