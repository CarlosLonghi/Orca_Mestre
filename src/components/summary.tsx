import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'

export function Summary() {
    const { transactions } = useContext(TransactionsContext)
    console.log(transactions);

    return (
        <article className="w-full max-w-app m-auto -mt-20 px-6 grid grid-cols-3 gap-8">
            <div className='bg-gray-600 rounded-md py-6 px-8'>
                <header className='flex items-start justify-between text-gray-100'>
                    <span>Entradas</span>
                    <ArrowCircleDown className='w-8 h-8 text-green-300'/>
                </header>

                <strong className='block mt-4 text-2xl md:text-3xl'>R$ 1.000,00</strong>
            </div>

            <div className='bg-gray-600 rounded-md py-6 px-8'>
                <header className='flex items-start justify-between text-gray-100'>
                    <span>Saídas</span>
                    <ArrowCircleUp className='w-8 h-8 text-red-300'/>
                </header>

                <strong className='block mt-4 text-2xl md:text-3xl'>R$ 1.000,00</strong>
            </div>

            <div className='bg-green-700 rounded-md py-6 px-8'>
                <header className='flex items-start justify-between text-gray-100'>
                    <span>Total</span>
                    <CurrencyDollar className='w-8 h-8 text-gray-50'/>
                </header>

                <strong className='block mt-4 text-2xl md:text-3xl'>R$ 1.000,00</strong>
            </div>
        </article>
    )
}