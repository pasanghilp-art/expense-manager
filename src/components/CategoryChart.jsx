import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

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

    const COLORS = ["#748ffc", "#ff6b6b", "#ffa94d", "#51cf66", "#c084fc"];
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={chartData}
                    dataKey="total"
                    nameKey="category"
                    outerRadius={100}
                    label
                />
                {chartData.map((entry, index) => (
                    <Cell
                        key={entry.category}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}
