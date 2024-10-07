import React from 'react'

interface TagOutlineProps {
  value?: string

  icon?: string
  color?: 'primary' | 'secondary' | 'orange' | 'blue' | 'brown' | 'white'
  onHandleClick?: ((event: any) => void) | undefined
}
export default function TagOutlined({
  value,
  icon,
  color = 'orange',
  onHandleClick,
}: TagOutlineProps) {
  const colorClasses: { [key: string]: string } = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    orange: 'border-orange',
    blue: 'border-blue',
    brown: 'border-brown',
    white: 'border-white',
  }

  return (
    <>
      <div
        className={`${colorClasses[color]} border  text-orange w-[max-content] text-center rounded-[50px] `}
      >
        <p className=" px-[15px] py-[8px] text-sm flex items-center gap-1">
          {value}
          <i
            className={`${icon} text-xs`}
            onClick={e => onHandleClick?.(value)}
          ></i>
        </p>
      </div>
    </>
  )
}
