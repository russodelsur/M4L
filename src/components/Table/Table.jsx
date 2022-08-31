import React from 'react'
import { useTable } from 'react-table'
import * as classes from './style.module.css';

function Table() {

const data = React.useMemo(
  () => [
    {
      products: 'Bespoke House Search',
      free: 'X5 Properties proposed',
      standard: 'X10 Properties proposed',
      premium: 'X10 Properties proposed',
    },
    {
      products: 'House Report',
      free: '£300 per report',
      standard: 'X1 included, £200 per report after',
      premium: 'X1 included, £200 per report after',
    },
    {
      products: 'Concept Design',
      free: '£600 per property',
      standard: '£600 per property',
      premium: '1X included',
    },
    {
      products: 'Purchasing Offer Assistance',
      free: 'Bespoke quote',
      standard: 'Bespoke quote',
      premium: 'Bespoke quote',
    },
    {
      products: 'Conveyancer Search',
      free: 'Bespoke quote',
      standard: 'Bespoke quote',
      premium: 'Bespoke quote',
    },
    {
      products: 'Property surveys & searches',
      free: 'Bespoke quote',
      standard: 'Bespoke quote',
      premium: 'Bespoke quote',
    },
    {
      products: 'Move-in assistance',
      free: 'Bespoke quote',
      standard: 'Bespoke quote',
      premium: 'Bespoke quote',
    },
    {
      products: 'Planning and bulding control',
      free: 'Bespoke quote',
      standard: 'Bespoke quote',
      premium: 'Bespoke quote',
    },
    {
      products: 'Managing construction',
      free: 'Bespoke quote',
      standard: 'Bespoke quote',
      premium: 'Bespoke quote',
    },
  ],
  []
)

const columns = React.useMemo(
  () => [
    {
      Header: ' ',
      columns: [
        {
          Header: '',
          accessor: 'products',
        },
      ],
    },
    {
      Header: 'Free Account',
      columns: [
        {
          Header: '£0',
          accessor: 'free',
        },
      ],
    },
    {
      Header: 'Standard account',
      columns: [
        {
          Header: '£250',
          accessor: 'standard',
        },
      ],
    },
    {
      Header: 'Premium account',
      columns: [
        {
          Header: '£600',
          accessor: 'premium',
        },
      ],
    },
  ],
  []
)

// Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table className={classes.Table} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr  {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  return (
      <Table />
  )
}

export default App


// { columns, data }

// columns={columns} data={data}