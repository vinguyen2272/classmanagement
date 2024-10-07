import type React from 'react'

interface TitleProps {
  children: React.ReactNode
}
export default function Title({ children }: TitleProps) {
  return (
    <div className="text-left px-[15px] py-[30px] m-0 bg-primary text-white  tracking-[8px]  ">
      {children}
    </div>
  )
}
