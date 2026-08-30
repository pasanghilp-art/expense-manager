import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { SummaryStats } from "./components/SummaryStats";
import { ExpenseProvider } from "./context/ExpenseContent";
import { CategoryBarChart } from "./components/CategoryBarChart";
import { CategoryPieChart } from "./components/CategoryPieChart";

function App() {
    return (
        <ExpenseProvider>
            <ExpenseForm />
            <ExpenseList />
            <SummaryStats />
            <CategoryPieChart />
            <CategoryBarChart />
        </ExpenseProvider>
    );
}

export default App;
