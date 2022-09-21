import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components'

import classes from './style.module.scss'

const LandingPage = () => {
  const navigate = useNavigate()
  
  const onClickHandler = () => {
    navigate('create')
  }

  return (
    <>
      <div className={classes.mobileBtn}>
        <Button
          showIcon
          onClickHandler={onClickHandler}
        >Create my event</Button>
      </div>
      <div className={classes.img}>
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220921T113759Z&X-Amz-Expires=86400&X-Amz-Signature=29cadef96543db028b76aa74dcdd46a0e8b352991ec4b416ed2ee8f5b9d48fd7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="landing png" />
      </div>
      <div className={classes.content}>
        <h1 className={classes.content_title}>
          Imagine if<br />
          <span className={classes.content_title_gradient}>Snapchat</span><br />
          had events
        </h1>
        <p className={classes.content_subtitle}>
          Easily host and share events with your friends across any social media.
        </p>
        <Button
          showIcon
          onClickHandler={onClickHandler}
        >Create my event</Button>
      </div>
    </>
  )
}

export default LandingPage