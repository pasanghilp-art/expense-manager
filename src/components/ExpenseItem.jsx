import "./ExpenseItem.css";

export function ExpenseItem({ expense, expenses, setExpenses }) {
    const DeleteBtn = (id) => {
        const Delete = expenses.filter((expenseItem) => expenseItem.id !== id);
        setExpenses(Delete);
    };

    return (
        <div className="expense-item">
            <span className=".expense-item">{expense.amount}</span>
            <span className=".expense-item">{expense.category}</span>
            <span className=".expense-item">{expense.date}</span>
            <span className=".expense-item">{expense.note}</span>
            <button
                className="delete-btn"
                onClick={() => DeleteBtn(expense.id)}
            >
                Delete
            </button>
        </div>
    );
}
