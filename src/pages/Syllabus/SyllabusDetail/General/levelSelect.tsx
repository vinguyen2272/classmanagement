export interface LevelOptionsType {
  label?: string
  value?: string
}

const LevelOptions: LevelOptionsType[] = [
  { label: 'Auto Detect', value: 'autoDetect' },
  { label: 'None auto Detect', value: 'noneAutoDetect' },
]

export default LevelOptions
