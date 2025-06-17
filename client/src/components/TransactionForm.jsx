import { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || isNaN(amount)) {
      setError("⚠️ Please enter a valid description and amount.");
      return;
    }

    const newTxn = {
      description,
      amount: parseFloat(amount),
      type,
    };

    onAdd(newTxn);
    setDescription("");
    setAmount("");
    setType("income");
    setError("");
  };

  const handleResetForm = () => {
    setDescription("");
    setAmount("");
    setType("income");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Add Transaction</h2>

      {error && <div className="text-red-600 font-medium mb-2">{error}</div>}

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded hover:opacity-90 transition"
      >
        Add Transaction
      </button>

      <button
        type="button"
        onClick={handleResetForm}
        className="w-full mt-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 font-semibold py-2 rounded hover:opacity-90 transition"
      >
        Reset Form
      </button>
    </form>
  );
};

export default TransactionForm;
