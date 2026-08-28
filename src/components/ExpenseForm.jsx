import { useState } from "react";

export function ExpenseForm({ onAddExpense }) {
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        date: "",
        note: "",
    });

    const SaveFormData = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddExpense(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={formData.amount}
                    onChange={SaveFormData}
                    name="amount"
                />
                <input
                    value={formData.category}
                    onChange={SaveFormData}
                    name="category"
                />
                <input
                    value={formData.date}
                    onChange={SaveFormData}
                    name="date"
                />
                <input
                    value={formData.note}
                    onChange={SaveFormData}
                    name="note"
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
}
