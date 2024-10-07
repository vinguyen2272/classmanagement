import Style from './type.module.css'
export interface EventInfo {
  title: string
  start: string
  end: string
  description: string
  location: string
  trainer: string
  admin: string
  type: 'intern' | 'fresher' | 'onFresher' | 'offFresher'
  domain: string
}

export const getEventClassNames = (eventType: EventInfo['type']): string => {
  switch (eventType) {
    case 'intern':
      return Style.fcEventIntern
    case 'fresher':
      return Style.fcEventFresher
    case 'onFresher':
      return Style.fcEventOnFresher
    case 'offFresher':
      return Style.fcEventOffFresher
    default:
      return ''
  }
}
export const getBlurClassNames = (eventType: EventInfo['type']): string => {
  switch (eventType) {
    case 'intern':
      return Style.fcEventInternBlur
    case 'fresher':
      return Style.fcEventFresherBlur
    case 'onFresher':
      return Style.fcEventOnFresherBlur
    case 'offFresher':
      return Style.fcEventOffFresherBlur
    default:
      return ''
  }
}
