import Link from 'next/link'
import React from 'react'


interface TableColumn {
  header: string
  accessor: string
  isLink?: boolean
  linkPrefix?: string
}

interface LinkTableProps {
  columns: TableColumn[]
  data: any[]
  className?: string
}

export const LinkTable: React.FC<LinkTableProps> = ({
  columns,
  data,
  className = '',
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 dark:divide-gray-700 ${className}`}>
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                >
                  {column.isLink
                    ? (
                        <Link
                          href={`${column.linkPrefix || ''}${row[column.accessor]}`}
                          className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 hover:underline"
                        >
                          {row[column.accessor]}
                        </Link>
                      )
                    : (
                        row[column.accessor]
                      )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
