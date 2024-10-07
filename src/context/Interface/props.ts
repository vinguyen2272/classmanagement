import type { ReactNode } from 'react'

export interface DefaultLayoutProps {
  children: ReactNode
}

export interface Route {
  path: string
  component: React.ComponentType
  layout?: React.ComponentType<{ children: ReactNode }> | null
}

export interface HeaderProps {
  handleNavigate: (path: string) => void
  location: any
}

export interface SideBarProps {
  handleNavigate: (path: string) => void
  location: {
    pathname: string
  }
}

export interface IconProps {
  color?: string
  fill?: string
  width?: number
  height?: number
}
