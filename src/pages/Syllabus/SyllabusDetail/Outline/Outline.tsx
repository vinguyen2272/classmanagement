import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { type Schedule } from '../../../../context/Interface/CourseSchedule'
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice'
import ProgramDetailContent from './ProgramDetailContent'
import { useParams } from 'react-router-dom'

const Outline = () => {
   const { id } = useParams<{ id: string }>()

   const syllabus = useAppSelector(state =>
     state.syllabus.syllabuses.find(s => s.syllabusId === id)
   )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setCreateStage('outline'));
  }, [dispatch]);
  const schedule: any = syllabus?.schedule;

  return (
    <div style={{width:'100%'}}>
      <ProgramDetailContent schedule={schedule} />
    </div>
  )
}

export default Outline
