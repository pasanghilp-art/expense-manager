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
            <div className="app-container">
                <div className="left-column">
                    <ExpenseForm />
                    <ExpenseList />
                </div>
                <div className="right-column">
                    <SummaryStats />
                    <CategoryPieChart />
                    <CategoryBarChart />
                </div>
            </div>
        </ExpenseProvider>
    );
}

export default App;
