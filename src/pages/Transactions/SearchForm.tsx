import { zodResolver } from '@hookform/resolvers/zod'
import { CircleNotch, MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from '@fluentui/react-context-selector'

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions
    })

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
        
    }

    return (
        <form 
            className="flex gap-4" 
            onSubmit={handleSubmit(handleSearchTransactions)}
        >
            <input 
                className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500" 
                type="text" 
                placeholder="Busque por transações..." 
                {...register('query')}
            />
            <button 
                className="flex items-center gap-3 p-4 border border-green-300 rounded-md text-green-300 font-bold transition hover:bg-green-500 hover:border-green-500 hover:text-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
            >
                {isSubmitting ?
                    <CircleNotch weight='bold' className='animate-spin w-5 h-5'/>
                    : 
                    <MagnifyingGlass weight='bold' className='w-5 h-5'/>
                }
                
                Buscar
            </button>
        </form>
    )
}