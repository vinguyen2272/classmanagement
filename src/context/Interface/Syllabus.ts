export interface Syllabus {
  name: string
  code: string
  creationDate: string
  createdBy: number
  outputStandard: string[]
  status: 'active' | 'inactive' | 'draft'
  syllabusId: string
  duration: number
  level: string
  attendeeNumber: number
  technicalRequirement: string
  courseObjective: string
  schedule: Schedule[]
}

interface Schedule {
  day: string
  units: Unit[]
}

interface Unit {
  unitName: string
  duration: number
  miniUnits: MiniUnit[]
}

interface MiniUnit {
  miniUnitName: string
  outcome: string
  miniDuration: number
  isOnline: boolean
  type: string
  learningMaterials: LearningMaterial[]
}

interface LearningMaterial {
  filename: string
  uploadedBy: string
  uploadedOn: string
}
