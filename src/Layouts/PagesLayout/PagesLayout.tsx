import React from 'react'
import { Outlet } from 'react-router-dom'

import classes from './style.module.scss'

const PagesLayout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default PagesLayout