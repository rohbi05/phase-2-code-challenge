import React, { useState, useEffect } from 'react'; // Import React and hooks
import Table from './Table';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://bank-of-flatiron-backend-two.vercel.app/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const addTransaction = (transaction) => {
    fetch('https://bank-of-flatiron-backend-two.vercel.app/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(newTransaction => setTransactions([...transactions, newTransaction]))
      .catch(error => console.error('Error adding transaction:', error));
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className='flex flex-col items-center text-2xl font-bold mb-4'>Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Form addTransaction={addTransaction} />
      <Table transactions={filteredTransactions} />
    </div>
  );
};

export default App;
