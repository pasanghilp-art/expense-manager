import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useExpenses } from "../context/ExpenseContent";

export function CategoryChart() {
    const { expenses } = useExpenses();
    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] =
            (acc[expense.category] || 0) + Number(expense.amount);
        return acc;
    }, {});

    const COLORS = ["#748ffc", "#ff6b6b", "#ffa94d", "#51cf66", "#c084fc"];

    const chartData = Object.entries(categoryTotals).map(
        ([category, total], index) => ({
            category,
            total,
            fill: COLORS[index % COLORS.length],
        }),
    );
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
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}
