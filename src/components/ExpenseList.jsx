import { ExpenseItem } from "./ExpenseItem";

export function ExpenseList({ expenses }) {
    if (expenses.length === 0) {
        return <p>No expenses yet!</p>;
    }
    return (
        <div className="expense-list">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </div>
    );
}
