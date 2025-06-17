const Expense = require("../models/Expense");

exports.getExpenses = async (req, res) => {
try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.json(expenses);
} catch (err) {
    res.status(500).json({ error: "Server Error" });
}
};

exports.addExpense = async (req, res) => {
try {
    const { description, amount, type } = req.body;
    const newExpense = new Expense({ description, amount, type });
    await newExpense.save();
    res.status(201).json(newExpense);
} catch (err) {
    res.status(400).json({ error: "Invalid data" });
}
};

exports.deleteExpense = async (req, res) => {
try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
} catch (err) {
    res.status(404).json({ error: "Expense not found" });
}
};
