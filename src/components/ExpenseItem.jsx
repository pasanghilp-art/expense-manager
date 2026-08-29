import "./ExpenseItem.css";

export function ExpenseItem({ expense }) {
    return (
        <div className="expense-item">
            <span className=".expense-item">{expense.amount}</span>
            <span className=".expense-item">{expense.category}</span>
            <span className=".expense-item">{expense.date}</span>
            <span className=".expense-item">{expense.note}</span>
        </div>
    );
}
