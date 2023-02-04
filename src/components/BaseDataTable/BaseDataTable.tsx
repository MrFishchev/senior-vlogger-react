import React from 'react'
import DataTable, { TableProps } from 'react-data-table-component'

const BaseDataTable = <T extends unknown>(
  props: TableProps<T>
): JSX.Element => {
  return <DataTable pagination {...props} />
}

export default BaseDataTable
