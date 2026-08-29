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
                <label>Amount</label>
                <input
                    value={formData.amount}
                    onChange={SaveFormData}
                    name="amount"
                />
                <label>Category</label>
                <input
                    value={formData.category}
                    onChange={SaveFormData}
                    name="category"
                />
                <label>Date</label>
                <input
                    value={formData.date}
                    onChange={SaveFormData}
                    name="date"
                />
                <label>Note</label>
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
