import { Button } from 'primereact/button'
import type React from 'react'

interface ButtonUnderlinedProps {
  color?: 'primary' | 'secondary' | 'orange' | 'blue' | 'brown' | 'white'
  children: React.ReactNode
  icon?: string
  onHandleClick?: (e?: any) => void
}
export default function ButtonUnderlined({
  children,
  color = 'orange',
  icon,
  onHandleClick,
}: ButtonUnderlinedProps) {
  const colorClasses: { [key: string]: string } = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    orange: 'text-orange',
    blue: 'text-blue',
    brown: 'text-brown',
    white: 'text-white',
  }

  return (
    <div>
      <Button
        icon={icon}
        className={`${colorClasses[color]} px-[10px] py-[8px] w-[max-content]   `}
        onClick={onHandleClick}
      >
        <span className={icon ? 'ms-2 underline' : 'underline'}>
          {children}
        </span>
      </Button>
    </div>
  )
}
