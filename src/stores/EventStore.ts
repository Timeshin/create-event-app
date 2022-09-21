import { makeAutoObservable } from 'mobx'
import { RootStore } from './index'

interface IEventData {
  eventName: string
  hostName: string
  startDate: string
  endDate: string
  photo: string
}

class EventStore {

  eventData: IEventData | null = null

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  setEventData(data: IEventData) {
    this.eventData = data
  }
  
}

export default EventStore
