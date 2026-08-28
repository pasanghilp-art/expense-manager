export function ExpenseItem({ expense }) {
    return (
        <div className="expense-item">
            <span>{expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <span>{expense.note}</span>
        </div>
    );
}
