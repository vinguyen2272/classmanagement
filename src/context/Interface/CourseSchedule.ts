
export interface LearningMaterials {
    filename: string
    uploadedBy: string
    uploadedOn: string
}

export interface MiniUnits {
    miniUnitName: string
    outcome: string
    miniDuration: string
    isOnline: boolean
    type: string
    learningMaterials: LearningMaterials[]
}

export interface Units {
    unitName: string
    duration: string
    miniUnits: MiniUnits[]
}

export interface Schedule {
    day: string
    units: Units[]
}

export interface CourseSchedule {
    id: string
    courseID: string
    schedule: Schedule[]
}