import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import { useRef } from 'react'
import {
  CopyIcon,
  CreateIcon,
  DeleteForeverIcon,
} from '../../../../assets/svg/DocumentManage/DocumentManage'
import {
  AddIcon
} from '../../../../assets/svg/Action/Action'
import style from './ActionButton.module.css'
import { useNavigate } from 'react-router-dom'

export interface ActionButtonsProps {
  onHandleDelete: (data: any) => void
  onHandleDuplicate: (data: any) => void
}
const ActionButtons = ({
  onHandleDelete,
  onHandleDuplicate,
}: ActionButtonsProps) => {
  const op = useRef<OverlayPanel>(null)

  const navigate = useNavigate()
  return (
    <>
      <Button
        type="button"
        icon="pi pi-ellipsis-h"
        rounded
        onClick={e => op.current?.toggle(e)}
      ></Button>
      <OverlayPanel ref={op} className={style.overlayPanelContainer}>
        <div className={style.popUpMenu} onClick={()=>{navigate('/syllabus/create')}}>
          <AddIcon />
          <p>Add new syllabus</p>
        </div>
        <div
          className={style.popUpMenu}
          onClick={() => {
            navigate('')
          }}
        >
          <CreateIcon />
          <p>Edit syllabus</p>
        </div>
        <div className={style.popUpMenu} onClick={onHandleDuplicate}>
          <CopyIcon />
          <p>Duplicate syllabus</p>
        </div>
        <div className={style.popUpMenu} onClick={onHandleDelete}>
          <DeleteForeverIcon />
          <p>Delete syllabus</p>
        </div>
      </OverlayPanel>
    </>
  )
}

export default ActionButtons
