import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchForm() {
    return (
        <form className="flex gap-4">
            <input className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500" type="text" placeholder="Busque por transações..." />
            <button 
                className="flex items-center gap-3 p-4 border border-green-300 rounded-md text-green-300 font-bold transition hover:bg-green-500 hover:border-green-500 hover:text-gray-50">
                <MagnifyingGlass weight='bold' className='w-5 h-5'/>
                Buscar
            </button>
        </form>
    )
}