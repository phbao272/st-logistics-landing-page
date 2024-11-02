'use client';

import { Table, TableProps } from '@mantine/core';
import React, { ReactNode } from 'react';

export interface IColumn<K> {
  title: string;
  key: K;
}

export interface TableCustomProps<T extends Record<string, any>> extends Omit<TableProps, 'data'> {
  data: T[];
  columns: {
    title: string;
    key: keyof T;
    render?: (value: T[keyof T]) => ReactNode;
  }[];
  header?: ReactNode;
  footer?: ReactNode;
}

export const TableCustom = <T extends Record<string, any>>({
  columns,
  data,
  header,
  footer,
  ...props
}: TableCustomProps<T>) => {
  const rows = data.map((item, index) => {
    return (
      <Table.Tr key={index}>
        {columns.map((column, colIndex) => {
          const cellValue = item[column.key];
          const renderedValue = column.render ? column.render(cellValue) : cellValue;
          return <Table.Td key={colIndex}>{renderedValue}</Table.Td>;
        })}
      </Table.Tr>
    );
  });

  return (
    <>
      {header && (
        <div className="border-primary border-l border-r border-t p-3 text-center text-sm">
          {header}
        </div>
      )}
      <Table
        striped
        withTableBorder
        withColumnBorders
        horizontalSpacing="sm"
        verticalSpacing="sm"
        {...props}
      >
        <Table.Thead>
          <Table.Tr>
            {columns.map((column, index) => (
              <Table.Th key={index}>{column.title}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      {footer && (
        <div className="border-primary border-b border-l border-r p-3 text-center text-sm">
          {footer}
        </div>
      )}
    </>
  );
};
