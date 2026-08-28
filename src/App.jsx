import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {
    const [expenses, setExpenses] = useState([]);

    const onAddExpense = (event) => {
        const id = Date.now();
        const eventWithId = event + id;
        setExpenses(eventWithId);
    };
    return <ExpenseForm onAddExpense={onAddExpense} />;
}

export default App;
