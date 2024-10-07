import styles from './UserListHead.module.css'
import { FilterListIcon } from '../../../../assets/svg/Action/Action'

import S_Button from '../../ComponentOnly/Button/Button'
import Modal from '../../../../components/Modal/Modal'
import { useAppDispatch } from '../../../../app/hooks'
import {
  removeSearchUsers,
  setSearchUsers,
} from '../../../../features/user/UserListSlice'
import Chip from '../../../../components/Chip/Chip'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../app/store'
function UserListHead() {
  const dispatch = useAppDispatch()
  const searchKeys = useSelector(
    (state: RootState) => state.userList.searchUsers
  )
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const inputValue = (e.target as HTMLInputElement).value.trim()
      if (!searchKeys.some(value => value.includes(inputValue)) && inputValue) {
        dispatch(setSearchUsers(inputValue))
        ;(e.target as HTMLInputElement).value = ''
      }
    }
  }
  const handleRemove = (keySearch: string) => {
    dispatch(removeSearchUsers(keySearch))
  }
  return (
    <div className={styles.tableHead}>
      <h4 className={`${styles.contentHead}`}>User Management</h4>
      <div className={styles.searchAdd}>
        <div className={styles.inputSearch}>
          <div className={styles.searchItem}>
            <i className={`${styles.searchIcon} pi pi-search`} />
            <input
              className={styles.inputItem}
              type="search"
              placeholder="Search by..."
              onKeyUp={handleSearch}
            />
          </div>
          <div>
            <S_Button icon={<FilterListIcon color="white" />}>Filter</S_Button>
          </div>
        </div>
        <Modal />
      </div>
      <div className={styles.chipContainer}>
        {searchKeys.length > 0 &&
          searchKeys.map((keySearch, index) => (
            <div onClick={() => handleRemove(keySearch)} key={index}>
              <Chip name={keySearch} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default UserListHead
