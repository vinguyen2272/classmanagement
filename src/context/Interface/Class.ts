export interface Class {
  classId: string
  className: string
  classCode: string
  creationDate: string
  completionDate: string
  createdBy: string
  duration: string
  attendeeType: string
  attendee: number
  location: string[]
  fsu: string
}

export interface Item {
  label: string
  value: string
  duration: string
  modifiedDate: string
  modifiedAuthor: string
}
export interface ClassDetails extends Class {
  commenceDate: string
  approvedBy: number[]
  reviewedBy: number[]
  reviewedDate: string
  approvedDate: string
  admin: number[]
  classTime: {
    from: { hour: string; minute: string }
    to: { hour: string; minute: string }
  }
  students: number[]
}
