import { useStores } from 'stores'
import { observer } from 'mobx-react-lite'

import classes from "./style.module.scss"

const EventPage = () => {
  const {
    eventStore: { eventData }
  } = useStores()

  return (
    <div className={classes.content}>
      <ul>
        <li>
          Event Name: {eventData?.eventName}
        </li>
        <li>
          Host name: {eventData?.hostName}
        </li>
        <li>
          Start date: {eventData?.startDate}
        </li>
        <li>
          End date: {eventData?.endDate}
        </li>
        <li>
          photo: <img src={eventData?.photo} alt="uploadedPhoto" />
        </li>
      </ul>
    </div>
  )
}

export default observer(EventPage)