import SyllabusCard from '../../components/SyllabusCard/SyllabusCard'
import SyllabusCardWithAvatar from '../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar'
import SyllabusTab from '../../components/SyllabusTab/SyllabusTab'
import SyllabusDetail from '../../components/SyllabusDetail/SyllabusDetail'
import styles from './Test.module.css'
import { Table } from '../../components/Table/Table'
import { Column } from 'primereact/column'
import { DatePicker } from '../../components/DatePicker/DatePicker'
import { useState } from 'react'
import ClassEdit from '../Class/ClassEdit/ClassEdit'
// import TrainingEdit from '../../components/TrainingEdit/TrainingEdit'




export default function Test() {
  // const data = [
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  //   {
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5,
  //   },
  // ]
  // const [date, setDate] = useState(new Date())
  // const handleChange = (e: any) => {
  //   setDate(e.value)
  // }

  return (
    <div className={styles.test}>
      {/* <h1>Welcome to the Project</h1>
      <p>This is the Test page.</p> */}

      {/* <h1>Table:</h1>
      <Table data={data}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </Table>
      <DatePicker value={date} onChange={handleChange} /> */}


      {/* <TrainingEdit></TrainingEdit> */}
      <ClassEdit></ClassEdit>
    </div>
  )
}
