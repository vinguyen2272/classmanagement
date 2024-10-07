import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Column } from 'primereact/column';
import styles from './UserList.module.css';
import UserListHead from '../UserListHead/UserListHead';
import { Table } from '../../../../components/Table/Table';
import { GenderIcon } from '../../../../assets/svg/Other/Other';
import S_TypeButton from '../../ComponentOnly/TypeButton/TypeButton';
import S_CustomTieredMenu from '../../ComponentOnly/S_CustomTieredMenu/S_CustomTieredMenu';
import {  useSelector } from 'react-redux';
import {  RootState } from '../../../../app/store';
import { fetchUserListData } from '../../../../features/user/UserListSlice';
import { useAppDispatch } from '../../../../app/hooks';

interface Product {
  id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  type: string;
  activeStatus?: boolean;
  phone?: string;
}

const UserList: React.FC = () => {

  const studentList = useSelector((state: RootState) => state.userList.userList);
  const keySearch = useSelector((state: RootState) => state.userList.searchUsers);
  const coverDate = (rowData: Product) => {
    const isoString = rowData.dateOfBirth;
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }
  
  const transformData = studentList.map((item: any) => (
    {
      ...item,
      dateOfBirth: coverDate(item)

    }
  ))

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserListData())
  }, [dispatch, keySearch]);


 

  const renderData = useMemo(() => {
    
    // Lọc dữ liệu dựa trên từ khóa hiện tại trong keySearch
    let filteredData = transformData;

    // Tiếp tục lọc dữ liệu với từng từ khóa trong keySearch
    keySearch.forEach(keyword => {
      filteredData = filteredData.filter(user =>
        Object.values(user).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    
    });

    return filteredData;

  }, [transformData, keySearch]);
  

  const checkGenders = (rowData: Product) => {
    return rowData.gender === 'male' ? (<GenderIcon />) : (<GenderIcon color='#FF7568' />)
  }

  const checkTypes = (rowData: Product) => {
    return rowData.type === 'Admin' ? (<S_TypeButton color='#4DB848' >Admin</S_TypeButton>) : (<S_TypeButton color='#0B2136' >Trainer</S_TypeButton>)
  }
  const actions = (rowData:Product) => (<S_CustomTieredMenu userId={rowData.id}/>)
  return (
    <div className={styles.userListContainer}>
      <UserListHead />
      <div className={styles.userTable}>
        <Table data={renderData}>
          <Column field='id' header='ID' sortable></Column>
          <Column field='fullName' header='Full Name' sortable></Column>
          <Column field='email' header='Email' sortable></Column>
          <Column field='dateOfBirth' header='Date of Birth' sortable></Column>
          <Column field="gender" header="Gender" body={checkGenders} sortable></Column>
          <Column field="type" header="Type" sortable body={checkTypes} ></Column>
          <Column body={actions} ></Column>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
