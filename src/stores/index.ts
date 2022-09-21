import { createContext, useContext } from 'react'
import EventStore from './EventStore'


export class RootStore {
  eventStore: EventStore

  constructor() {
    this.eventStore = new EventStore(this)
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)  
