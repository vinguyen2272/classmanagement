import { Tooltip } from 'primereact/tooltip'
import styles from './CusTooltip.module.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import './CusTooltip.css'

interface Props {
  target: React.RefObject<HTMLDivElement>
  position: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

export default function CusTooltip({ target, position, children }: Props) {
  return (
    <Tooltip
      className={styles.tooltipWrapper}
      target={target}
      position={position}
    >
      {children}
    </Tooltip>
  )
}
