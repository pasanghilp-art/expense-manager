export function CategoryChart({ expenses }) {
    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] =
            (acc[expense.category] || 0) + Number(expense.amount);
        return acc;
    }, {});

    const chartData = Object.entries(categoryTotals).map(
        ([category, total]) => ({
            category,
            total,
        }),
    );

    console.log(chartData);
    return <></>;
}
