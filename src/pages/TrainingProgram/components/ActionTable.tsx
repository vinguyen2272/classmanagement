/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import { Dispatch, SetStateAction, useRef } from 'react'
import {
  CopyIcon,
  CreateIcon,
  DeleteForeverIcon,
} from '../../../assets/svg/DocumentManage/DocumentManage'
import type { CourseModel } from '../../../context/Interface/CourseModel'

interface ActionTableProps {
  data: CourseModel
  onHandleVisible: Dispatch<SetStateAction<boolean>>
  onHandleDuplicateProgram: (data: CourseModel) => void
  onHandleSelectProgram: Dispatch<string | null>
}
function ActionTable({
  data,
  onHandleVisible,
  onHandleDuplicateProgram,
  onHandleSelectProgram,
}: ActionTableProps) {
  const op = useRef<OverlayPanel>(null)

  return (
    <div>
      <Button
        type="button"
        icon="pi pi-ellipsis-h"
        rounded
        onClick={e => op.current?.toggle(e)}
      ></Button>

      <OverlayPanel ref={op}>
        <div className="flex items-center gap-1 cursor-pointer">
          <CreateIcon />

          <p>Edit program</p>
        </div>

        <div
          className="flex items-center gap-1 my-4 cursor-pointer"
          onClick={e => {
            onHandleDuplicateProgram(data)
            op.current?.toggle(e)
          }}
        >
          <CopyIcon />

          <p>Duplicate program</p>
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer "
          onClick={() => {
            onHandleSelectProgram(data.courseId)
            onHandleVisible(true)
          }}
        >
          <DeleteForeverIcon />

          <p>Delete program</p>
        </div>
      </OverlayPanel>
    </div>
  )
}

export default ActionTable
