const Balance = ({ income, expense }) => {
  const balance = income - expense;

  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">
        Balance: Rs {balance > 0 ? balance : 0}
      </h2>

      {balance < 0 && (
        <p className="text-center text-red-600 text-sm font-medium">
          You're taking loan of Rs {Math.abs(balance)}
        </p>
      )}

      <div className="flex justify-between text-gray-600 font-medium mt-2">
        <p>Income: Rs {income}</p>
        <p>Expense: Rs {expense}</p>
      </div>
    </div>
  );
};

export default Balance;
