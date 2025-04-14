import React from 'react';
import Link from 'next/link';

interface TableColumn {
  header: string;
  accessor: string;
  isLink?: boolean;
  linkPrefix?: string;
}

interface LinkTableProps {
  columns: TableColumn[];
  data: any[];
  className?: string;
}

export const LinkTable: React.FC<LinkTableProps> = ({
  columns,
  data,
  className = '',
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {column.isLink ? (
                    <Link
                      href={`${column.linkPrefix || ''}${row[column.accessor]}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {row[column.accessor]}
                    </Link>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 