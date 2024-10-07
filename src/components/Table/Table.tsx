import 'primeicons/primeicons.css'
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown'
import type { PaginatorPageChangeEvent } from 'primereact/paginator'
import { Paginator } from 'primereact/paginator'
import type React from 'react'
import { useEffect, useState } from 'react'
import style from './Table.module.css'

export interface TableProps {
  children: React.ReactNode
  data: any[]
}

export const Table = ({ children, data }: TableProps) => {
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  const customSortIcon = (options: any) => {
    let icon = options.sorted ? (
      options.sortOrder < 0 ? (
        <div style={{ marginLeft: '5px' }}>
          <i className="pi pi-sort-amount-up"></i>
        </div>
      ) : (
        <div style={{ marginLeft: '5px' }}>
          <i className="pi pi-sort-amount-down"></i>
        </div>
      )
    ) : (
      <div style={{ marginLeft: '3px' }}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_252_22516)">
            <path
              d="M5.70833 13.5H7.54167C7.79375 13.5 8 13.1625 8 12.75C8 12.3375 7.79375 12 7.54167 12H5.70833C5.45625 12 5.25 12.3375 5.25 12.75C5.25 13.1625 5.45625 13.5 5.70833 13.5ZM5.25 5.25C5.25 5.6625 5.45625 6 5.70833 6H13.0417C13.2937 6 13.5 5.6625 13.5 5.25C13.5 4.8375 13.2937 4.5 13.0417 4.5H5.70833C5.45625 4.5 5.25 4.8375 5.25 5.25ZM5.70833 9.75H10.2917C10.5438 9.75 10.75 9.4125 10.75 9C10.75 8.5875 10.5438 8.25 10.2917 8.25H5.70833C5.45625 8.25 5.25 8.5875 5.25 9C5.25 9.4125 5.45625 9.75 5.70833 9.75Z"
              fill="#DFDEDE"
            />
          </g>
          <defs>
            <clipPath id="clip0_252_22516)">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
    return icon
  }

  const displayedData = data.slice(first, first + rows)

  useEffect(() => {
    setFirst(0)
  }, [rows])

  const customPaginatorTemplate = {
    layout: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink ',
    FirstPageLink: (options: {
      className: string | undefined
      onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
      disabled: boolean | undefined
    }) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="
http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              d="M0.589996 1.41L5.18 6L0.589996 10.59L2 12L8 6L2 0L0.589996 1.41ZM11 0H13V12H11V0Z"
              fill="#2D3748"
            />
          </svg>
        </button>
      )
    },
    PrevPageLink: (options: {
      className: string | undefined
      onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
      disabled: boolean | undefined
    }) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="
http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1.16212L5.9323 0L0 6.5L5.9383 13L7 11.8379L2.12339 6.5L7 1.16212Z"
              fill="#2D3748"
            />
          </svg>
        </button>
      )
    },
    NextPageLink: (options: {
      className: string | undefined
      onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
      disabled: boolean | undefined
    }) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="
http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.8149L1.0617 11.8766L7 5.9383L1.0617 0L0 1.0617L4.87661 5.9383L0 10.8149Z"
              fill="#2D3748"
            />
          </svg>
        </button>
      )
    },
    LastPageLink: (options: {
      className: string | undefined
      onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
      disabled: boolean | undefined
    }) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="
http://www.w3.org/2000/svg"
          >
            <path
              d="M0.589996 1.41L5.18 6L0.589996 10.59L2 12L8 6L2 0L0.589996 1.41ZM11 0H13V12H11V0Z"
              fill="#2D3748"
            />
          </svg>
        </button>
      )
    },
  }

  return (
    <div className={style.listContainer}>
      <div className={style.contentContainer}>
        <DataTable value={displayedData} sortIcon={customSortIcon} dataKey="id">
          {children}
        </DataTable>

        <div className={style.paginatorContainer}>
          <Paginator
            first={first}
            rows={rows}
            totalRecords={data.length}
            onPageChange={onPageChange}
            rowsPerPageOptions={[2, 4, 6, 8, 10]}
            template={customPaginatorTemplate}
            className={style.paginator}
          />
          <div className={style.dropDownContainer}>
            <p className={style.dropDownTitle}>Rows per page:</p>
            <Dropdown
              value={rows}
              options={[
                { label: '2', value: 2 },
                { label: '4', value: 4 },
                { label: '6', value: 6 },
                { label: '8', value: 8 },
                { label: '10', value: 10 },
              ]}
              onChange={e => setRows(e.value)}
              placeholder="Select Rows"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
