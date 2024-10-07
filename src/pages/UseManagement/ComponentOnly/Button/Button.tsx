import { Button } from 'primereact/button'
import type React from 'react'

interface ButtonContainedProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'orange' | 'blue' | 'brown'
  icon?: any
  onClick?:(e:React.MouseEvent<HTMLButtonElement>) => void
}

export default function S_Button({
  children,
  color = 'primary',
  icon,
  onClick,
}: ButtonContainedProps) {
  const colorClasses: { [key: string]: string } = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    orange: 'bg-orange',
    blue: 'bg-blue',
    brown: 'bg-brown',
  }

  return (
    <div>
      <Button
        icon={icon}
        className={`${colorClasses[color]} px-[10px] py-[4px] text-white  ` }
        style={{borderRadius:'8px'}}
        onClick={onClick}
      >
        <span className="ms-2">{children}</span>
      </Button>
    </div>
  )
}
