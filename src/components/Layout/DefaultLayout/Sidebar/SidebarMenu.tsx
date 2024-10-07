import type React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import {
  toggleSidebar,
  selectCollapsed,
} from '../../../../features/sidebar/sidebarSlice'
import styles from './SidebarMenu.module.css'
import items, { type MenuItemType } from './SidebarItems'
import {
  MenuIcon,
  MenuCloseIcon,
} from '../../../../assets/svg/NavigationMenu/NavigationMenu'

const SidebarMenu: React.FC = () => {
  const dispatch = useAppDispatch()
  const collapsed = useAppSelector(selectCollapsed)
  const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>({})
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const newOpenSubMenu = { ...openSubMenu }
    Object.keys(newOpenSubMenu).forEach(key => {
      if (!newOpenSubMenu[key]) {
        delete newOpenSubMenu[key]
      }
    })

    items.forEach(item => {
      if (item.items) {
        item.items.forEach(subItem => {
          if (subItem.path === location.pathname) {
            newOpenSubMenu[item.key!] = true
          }
        })
      }
    })

    setOpenSubMenu(newOpenSubMenu)
  }, [location.pathname])

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(prev => {
      const newState = { ...prev }
      Object.keys(newState).forEach(key => {
        if (key !== menu) {
          newState[key] = false
        }
      })
      newState[menu] = !prev[menu]
      return newState
    })
  }

  const toggleSubMenuIcon = (menu: string) => {
    setOpenSubMenu(prev => ({ ...prev, [menu]: !prev[menu] }))
  }

  const handleCollapse = () => {
    dispatch(toggleSidebar())
    if (!collapsed) {
      setOpenSubMenu({})
    } else {
      items.forEach(item => {
        if (item.items) {
          item.items.forEach(subItem => {
            if (subItem.path === location.pathname) {
              setOpenSubMenu(prev => ({ ...prev, [item.key!]: true }))
            }
          })
        }
      })
    }
  }

  const handleLabelClick = (item: MenuItemType) => {
    toggleSubMenu(item.key!)
    if (item.items && item.items.length > 0) {
      navigate(item.items[0].path!)
    } else if (item.path) {
      navigate(item.path)
    }
  }

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div
        className={`${styles.menuItem} ${styles.barButton}`}
        onClick={handleCollapse}
      >
        {collapsed ? <MenuIcon /> : <MenuCloseIcon />}
      </div>
      {items.map((item, index) => (
        <div key={index} className={styles.menuItem}>
          <div className={styles.menuTitle}>
            <div>
              <item.icon width={24} height={24} color="#2D3748" />
            </div>

            <span
              className={styles.itemName}
              onClick={() => handleLabelClick(item)}
            >
              {item.label}
            </span>
            {item.items && item.items.length > 0 && (
              <i
                className={`${styles.itemShowIcon} pi ${
                  openSubMenu[item.key!] ? 'pi-chevron-down' : 'pi-chevron-left'
                }`}
                onClick={e => {
                  e.stopPropagation()
                  item.key && toggleSubMenuIcon(item.key)
                }}
              ></i>
            )}
          </div>
          {!collapsed && item.key && (
            <div
              className={`${styles.submenuItems} ${
                openSubMenu[item.key] ? styles.open : ''
              }`}
            >
              {item.items?.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path!}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  onClick={() => {
                    setOpenSubMenu(prev => ({
                      ...prev,
                      [item.key!]: false,
                    }))
                    toggleSubMenu(item.key!)
                  }}
                >
                  <span>{subItem.label}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default SidebarMenu
