import { useEffect } from 'react'
import Title from './components/Title'
import TrainingForm from './components/TrainingForm'
import TrainingList from './components/TrainingList'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  getAllPrograms,
  selectInputSearch,
  selectLoading,
  selectProgram,
} from '../../features/program/trainingProgramSlice'
import { getAdmin, selectAdmin } from '../../features/admin/adminSlice'

export default function TrainingProgram() {
  const dispatch = useAppDispatch()

  const programs = useAppSelector(selectProgram)
  const loading = useAppSelector(selectLoading)
  const inputSearched = useAppSelector(selectInputSearch)
  const admins = useAppSelector(selectAdmin)

  const filteredData =
    inputSearched && inputSearched.length > 0
      ? programs?.filter(item => {
          return inputSearched.every(key =>
            Object.values(item).some(value =>
              value.toString().toLowerCase().includes(key.toLowerCase())
            )
          )
        })
      : programs

  useEffect(() => {
    dispatch(getAllPrograms())
    dispatch(getAdmin())
  }, [dispatch])

  return (
    <div>
      <div className={''}>
        <Title>
          <h2 className="text-xl text-white ">Training program</h2>
        </Title>
      </div>

      <TrainingForm />

      {filteredData && (
        <TrainingList data={filteredData} loading={loading} admins={admins} />
      )}
    </div>
  )
}
