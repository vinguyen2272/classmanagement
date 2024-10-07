import { Tag } from 'primereact/tag'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import ButtonContained from '../../../components/Button/ButtonContained'
import {
  programActions,
  selectProgramStep,
} from '../../../features/program/trainingProgramSlice'
import Title from '../components/Title'
import { TrainingProgramAddSyllabus } from '../TrainingProgramAddSyllabus/TrainingProgramAddSyllabus'
import style from './TrainingProgramCreate.module.css'
export const TrainingProgramCreate = () => {
  const dispatch = useAppDispatch()
  const currentStep = useAppSelector(selectProgramStep)
  return (
    <div className={style.classCreateNoInput}>
      {currentStep === 'create training program' ? (
        <>
          <Title>New Training program</Title>
          <div className={style.classInput}>
            <h3>Program name</h3>
            <input
              type="text"
              className={style.inputField}
              placeholder="Name the program name"
              value=""
              onChange={() => {}}
            />
            <ButtonContained
              onHandleClick={() => {
                dispatch(programActions.setSelectProgramStep('add syllabus'))
              }}
            >
              Create
            </ButtonContained>
          </div>
        </>
      ) : (
        <>
          <Title>
            <p> Training Program </p>

            <div className="font-bold flex items-center ">
              <h2
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span className=" text-[40px] ">
                  {/* {programDetail?.courseAlias} */}
                  DevOps Foundation
                </span>
                <Tag
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #fff',
                    borderRadius: '40px',
                    letterSpacing: 0,
                  }}
                >
                  {/* {programDetail?.status} */}
                  Inactive
                </Tag>
              </h2>

              <i
                className="pi pi-ellipsis-h ml-auto"
                style={{
                  fontSize: '30px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              ></i>
            </div>
          </Title>
          <TrainingProgramAddSyllabus />
        </>
      )}
    </div>
  )
}
