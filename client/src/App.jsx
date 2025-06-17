import { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import axios from "./api";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("/transactions");
      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  npm 
  };

  const handleAdd = async (txn) => {
    try {
      const res = await axios.post("/transactions", txn);
      setTransactions([res.data, ...transactions]);
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/transactions/${id}`);
      setTransactions(transactions.filter((txn) => txn._id !== id));
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  const handleClearHistory = async () => {
    const confirmReset = window.confirm(
      "Are you sure you want to clear all transaction history?"
    );
    if (!confirmReset) return;

    try {
      for (const txn of transactions) {
        await axios.delete(`/transactions/${txn._id}`);
      }
      setTransactions([]);
    } catch (err) {
      console.error("Error clearing transactions:", err);
    }
  };

  const income = transactions
    .filter((txn) => txn.type === "income")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const expense = transactions
    .filter((txn) => txn.type === "expense")
    .reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white bg-opacity-90 shadow-xl rounded-lg p-6 backdrop-blur-md">
        <Header
          onToggleHistory={() => setShowHistory(!showHistory)}
          showHistory={showHistory}
          onClearHistory={handleClearHistory}
        />

        <Balance income={income} expense={expense} />
        <TransactionForm onAdd={handleAdd} />

        {showHistory && (
          <TransactionList
            transactions={transactions}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default App;
