import type { Route } from '../context/Interface/props'
import ClassCreate from '../pages/Class/ClassCreate/ClassCreate'
import ClassDetail from '../pages/Class/ClassDetail/ClassDetail'
import { ListOfClass } from '../pages/Class/ListOfClass/ListOfClass'
import Home from '../pages/Home/Home'
import ListOfSyllabus from '../pages/Syllabus/ListOfSyllabus/ListOfSyllabus'
import SyllabusCreate from '../pages/Syllabus/SyllabusCreate/SyllabusCreate'
import SyllabusDetail from '../pages/Syllabus/SyllabusDetail/SyllabusDetail'
import Test from '../pages/Test/Test'
import TrainingCalendar from '../pages/TrainingCalendar/TrainingCalendar'
import TrainingProgramDetail from '../pages/TrainingProgram/components/TrainingProgramDetail'
import TrainingProgram from '../pages/TrainingProgram/TrainingProgram'
import { TrainingProgramCreate } from '../pages/TrainingProgram/TraniningProgramCreate/TrainingProgramCreate'
import UsePermission from '../pages/UseManagement/Use permission/UsePermission'
import UserList from '../pages/UseManagement/UserList/UserListTable/UserList'

const publicRoutes: Route[] = [
  { path: '/', component: Home },
  { path: '/class/view', component: ListOfClass },
  { path: '/class/create', component: ClassCreate },
  { path: '/class/detail/:id', component: ClassDetail },
  { path: '/training-program/view', component: TrainingProgram },
  { path: '/class/:id/edit', component: ClassDetail },
  { path: '/training-program', component: TrainingProgram },
  { path: '/training-program/detail/:id', component: TrainingProgramDetail },
  { path: '/training-program/create', component: TrainingProgramCreate },
  { path: '/class/view', component: ListOfClass },
  { path: '/class/edit/:id', component: Test },
  { path: 'syllabus/view', component: ListOfSyllabus },
  { path: 'syllabus/:id/detail', component: SyllabusDetail },
  { path: 'syllabus/create', component: SyllabusCreate },
  { path: '/user-management/list', component: UserList },
  { path: '/user-management/permission', component: UsePermission },
  { path: '/setting/calendar', component: TrainingCalendar },
  { path: '/test', component: Test },
  { path: '/*', component: Test },
]

const privateRoutes: Route[] = [
  // { path: "/main", component: Login, layout: null },
  // { path: "/main/home", component: Error },
  // { path: "/main/email", component: Email },
  // { path: "/main/email/:folder", component: Email },
  // { path: "/main/email/:folder/:id", component: Email },
  // { path: "/main/contact", component: Error },
]

export { privateRoutes, publicRoutes }
