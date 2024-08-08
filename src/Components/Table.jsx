import React from 'react';

const Table = ({ transactions }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Description</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Category</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Amount</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{transaction.date}</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{transaction.description}</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{transaction.category}</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
