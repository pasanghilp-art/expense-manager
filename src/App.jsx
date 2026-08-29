import { useState, useEffect } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { SummaryStats } from "./components/SummaryStats";
import { CategoryChart } from "./components/CategoryChart";

function App() {
    const [expenses, setExpenses] = useState(
        JSON.parse(localStorage.getItem("expenses") || "[]"),
    );

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const onAddExpense = (formData) => {
        const id = Date.now();
        const expensesWithId = { ...formData, id };
        setExpenses([...expenses, expensesWithId]);
    };
    return (
        <>
            <ExpenseForm onAddExpense={onAddExpense} />
            <ExpenseList expenses={expenses} />
            <SummaryStats expenses={expenses} />
            <CategoryChart expenses={expenses} />
        </>
    );
}

export default App;
