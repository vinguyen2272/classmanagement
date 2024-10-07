import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CopyIcon,
  CreateIcon,
  DeleteForeverIcon,
} from '../../../../assets/svg/DocumentManage/DocumentManage'
import style from '../../ListOfClass/ListOfClass.module.css'

export interface ActionButtonsProps {
  onHandleDelete: (data: any) => void
  onHandleDuplicate: (data: any) => void
  classId: string
}
const ActionButtons = ({
  onHandleDelete,
  onHandleDuplicate,
  classId,
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
        <div
          className={style.popUpMenu}
          onClick={() => {
            navigate(`/class/edit/${classId}`)
          }}
        >
          <CreateIcon />
          <p>Edit class</p>
        </div>
        <div className={style.popUpMenu} onClick={onHandleDuplicate}>
          <CopyIcon />
          <p>Duplicate class</p>
        </div>
        <div className={style.popUpMenu} onClick={onHandleDelete}>
          <DeleteForeverIcon />
          <p>Delete class</p>
        </div>
      </OverlayPanel>
    </>
  )
}

export default ActionButtons
