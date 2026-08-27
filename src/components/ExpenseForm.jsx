import { useState } from "react";

export function ExpenseForm() {
    const [expenseItem, setExpenseItem] = useState([]);
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        date: "",
        note: "",
    });

    const SaveFormData = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const SaveExpense = (event) => {
        setExpenseItem(event.target.value);
    };
    return (
        <>
            <form onSubmit={SaveExpense}>
                <input value={expenseItem} onChange={SaveExpense} />
                <input value={formData} onChange={SaveFormData} name="amount" />
                <input
                    value={formData}
                    onChange={SaveFormData}
                    name="category"
                />
                <input value={formData} onChange={SaveFormData} name="date" />
                <input value={formData} onChange={SaveFormData} name="note" />
                <button type="submit">Save</button>
            </form>
        </>
    );
}
