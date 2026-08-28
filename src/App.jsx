import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {
    const [expenses, setExpenses] = useState([]);

    const onAddExpense = (formData) => {
        const id = Date.now();
        const expenseWithId = { ...formData, id };
        setExpenses([...expenses, expenseWithId]);
    };
    return <ExpenseForm onAddExpense={onAddExpense} />;
}

export default App;
