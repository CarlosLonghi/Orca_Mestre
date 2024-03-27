import { useEffect, useState } from "react";
import { tv } from 'tailwind-variants'

import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./SearchForm";

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
}

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
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()

        setTransactions(data)
    }
    useEffect(() => {
        loadTransactions()
    }, [])

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