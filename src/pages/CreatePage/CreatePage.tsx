import { useNavigate } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'

import { Button, Input } from 'components'

import classes from './style.module.scss'

const CreatePage = () => {
  const { eventStore } = useStores()
  const navigate = useNavigate()
  const [eventName, setEventName] = useState('')
  const [hostName, setHostName] = useState('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const onSubmitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!eventName || !hostName || !startDate || !endDate || !image) return
    
    const eventData = {
      eventName,
      hostName,
      startDate,
      endDate,
      photo: image
    }
    
    eventStore.setEventData(eventData)
    navigate('/event')
  }

  const onFileUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if(target.files) {
      const file = target.files[0]
      if(file) {
        const reader = new FileReader()
        reader.onload = () => {
          const result = reader.result
          setImage(result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <div className={classes.form_wrapper}>
      <form
        className={classes.form}
        onSubmit={onSubmitHandler}
        >
        <Input
          value={eventName}
          onChange={setEventName}
          placeholder='Event name'
        />
        <Input
          value={hostName}
          onChange={setHostName}
          placeholder='Host name'
        />
        <label>
          Start date:{' '}
          <Input
            value={startDate}
            onChange={setStartDate}
            type='date'
          />
        </label>
        <label>
          End Date:{' '}
          <Input
            value={endDate}
            onChange={setEndDate}
            type='date'
          />
        </label>
        <input type='file' onChange={onFileUpload} />
        {
          image && <img className={classes.uploadedImg} src={image} alt='uploadedImage' />
        }
        <Button
          type='submit'
        >Create event</Button>
      </form>
    </div>
  )
}

export default observer(CreatePage)