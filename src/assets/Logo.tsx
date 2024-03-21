import { Cardholder } from '@phosphor-icons/react'

export const Logo = () => {
    return (
        <div className='flex items-center gap-1 text-green-300'> 
            <Cardholder className='w-10 h-10'/>

            <h2 className='font-semibold text-xl'>Orça Mestre</h2>
        </div>
    )
}