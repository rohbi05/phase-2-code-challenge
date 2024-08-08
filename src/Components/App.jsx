import Table from './assets/components/Table';
import Form from './assets/components/Form';
import SearchBar from './assets/components/SearchBar';

  
  const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data));
    }, []);
  
    const addTransaction = (transaction) => {
      fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      })
        .then(response => response.json())
        .then(newTransaction => setTransactions([...transactions, newTransaction]));
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