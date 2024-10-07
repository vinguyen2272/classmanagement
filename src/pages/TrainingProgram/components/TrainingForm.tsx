import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import ButtonContained from '../../../components/Button/ButtonContained'
import TagContained from '../../../components/Tag/TagContained'
import FilteringTool from '../../../components/FilteringTool/FilteringTool'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  programActions,
  selectInputSearch,
} from '../../../features/program/trainingProgramSlice'

export default function TrainingForm() {
  const [inputSearch, setInputSearch] = useState<string>('')

  const dispatch = useAppDispatch()

  const inputSearched = useAppSelector(selectInputSearch)

  const dispatchInputSearch = () => {
    if (inputSearch.trim() === '') return
    dispatch(programActions.addInputSearch(inputSearch))
    setInputSearch('')
  }

  const handleDeleteInputSearch = (inputSearch: string) => {
    dispatch(programActions.deleteInputSearch(inputSearch))
  }

  return (
    <>
      <div className="my-[20px] flex flex-row items-center justify-between px-[30px] ">
        <div className="flex gap-3 ">
          <IconField
            iconPosition="left"
            className=" flex  rounded-[10px] w-[300px]  "
          >
            <InputIcon className="pi pi-search size-xs "></InputIcon>

            <InputText
              v-model="value1"
              placeholder="Search"
              className=" w-[100%] focus:outline-none border border-1 border-primary ps-8"
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  dispatchInputSearch()
                }
              }}
            />
          </IconField>

          <FilteringTool />
        </div>

        <div className="flex gap-1">
          <ButtonContained icon="pi pi-file-arrow-up" color="orange">
            Import
          </ButtonContained>

          <ButtonContained icon="pi pi-plus-circle">Add now</ButtonContained>
        </div>
      </div>

      <div className="flex gap-3 px-[30px]">
        {inputSearched &&
          inputSearched.map((item, index) => (
            <TagContained
              color="brown"
              value={item}
              icon="pi pi-times"
              key={index}
              onHandleClick={e => handleDeleteInputSearch(item)}
            />
          ))}
      </div>
    </>
  )
}
