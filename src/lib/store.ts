// import dayjs from 'dayjs'
import { atom } from 'recoil'

export const newTaskState = atom({
  key: 'newTaskState',
  default: '',
})

export const newDueDateState = atom({
  key: 'newDueDateState',
  default: undefined,
})

export const newWeekState = atom({
  key: 'newWeekState',
  default: 'current',
})
