import React, { useState } from 'react';

const Form = ({ addTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ date, description, category, amount: parseFloat(amount) });
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        required 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default Form;
