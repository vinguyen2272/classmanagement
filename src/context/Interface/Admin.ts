export interface Admin {
  name: string
  userName: string
  passWord: string
  email: string
  title: string
  gender: string
  adminId: string
  isSA: boolean
  courses: Courses[]
}
export interface Courses {
  classId: string
  role: string
}
