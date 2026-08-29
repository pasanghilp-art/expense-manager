export function SummaryStats({ expenses }) {
    const total = expenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0,
    );

    return (
        <div className="summary-stats">
            <span>Total: {total}</span>
        </div>
    );
}
