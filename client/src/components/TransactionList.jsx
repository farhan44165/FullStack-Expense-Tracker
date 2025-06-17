const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-3">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions yet.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((txn) => (
            <li
              key={txn._id}
              className={`flex justify-between items-center p-2 rounded border-l-4 ${
                txn.type === "income" ? "border-green-400" : "border-red-400"
              }`}
            >
              <div>
                <p className="font-medium">{txn.description}</p>
                <p className="text-sm text-gray-500">Rs {txn.amount}</p>
              </div>
              <button
                onClick={() => onDelete(txn._id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
