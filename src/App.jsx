import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { SummaryStats } from "./components/SummaryStats";
import { CategoryChart } from "./components/CategoryChart";
import { ExpenseProvider } from "./context/ExpenseContent";

function App() {
    return (
        <ExpenseProvider>
            <ExpenseForm />
            <ExpenseList />
            <SummaryStats />
            <CategoryChart />
        </ExpenseProvider>
    );
}

export default App;
