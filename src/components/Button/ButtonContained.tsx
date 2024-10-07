import { Button } from 'primereact/button'
import type React from 'react'

interface ButtonContainedProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'orange' | 'blue' | 'brown' | 'white'
  icon?: string
  onHandleClick?: (e?: any) => void
}
export default function ButtonContained({
  children,
  color = 'primary',
  icon,
  onHandleClick,
}: ButtonContainedProps) {
  const colorClasses: { [key: string]: string } = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    orange: 'bg-orange',
    blue: 'bg-blue',
    brown: 'bg-brown',
    white: 'bg-white',
  }

  return (
    <div>
      <Button
        icon={icon}
        className={`${colorClasses[color]} px-[10px] py-[8px] text-white text-center w-[max-content]  `}
        onClick={onHandleClick}
      >
        <span className={` flex gap-1 ${icon ? 'ms-2 ' : ''}`}>{children}</span>
      </Button>
    </div>
  )
}
