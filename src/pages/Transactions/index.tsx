import { useContext } from "react";
import { tv } from 'tailwind-variants'

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./SearchForm";

const transactionValueStyle = tv({
    base: '',
    variants: {
        type: {
            income: 'text-green-300',
            outcome: 'text-red-300',
        },
    },
});

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />

            <main className="w-full max-w-app mt-16 mx-auto px-6">
                <SearchForm />

                <table className="w-full border-separate border-spacing-y-2">
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td className="flex-1">{transaction.description}</td>
                                    <td className={transactionValueStyle({ type: transaction.type })}>R$ {transaction.price}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    )
}