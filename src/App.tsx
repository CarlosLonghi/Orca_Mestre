import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <div className="bg-gray-950">
      <TransactionsProvider>
        <Transactions/>
      </TransactionsProvider>
    </div>
  )
}
