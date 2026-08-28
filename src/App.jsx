import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";

function App() {
    const [expenses, setExpenses] = useState([]);

    const onAddExpense = (formData) => {
        const id = Date.now();
        const expensesWithId = { ...formData, id };
        setExpenses([...expenses, expensesWithId]);
    };
    return (
        <>
            <ExpenseForm onAddExpense={onAddExpense} />
            <ExpenseList expenses={expenses} />
        </>
    );
}

export default App;
