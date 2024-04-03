import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod'
import { TransactionsContext } from "../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext)
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data

        await createTransaction({
            description,
            price,
            category,
            type
        })
        
        reset()
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-gray-900/75"/>

            <Dialog.Content className="min-w-[32rem] rounded-md p-8 bg-gray-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close>
                    <X className="w-6 h-6 absolute top-8 right-8 text-gray-300 transition hover:text-red-500 leading-none focus-visible:text-green-300"/>
                </Dialog.Close>

                <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        className="bg-gray-900 placeholder-gray-500 rounded-md border-none text-gray-300 p-4"
                        type="text" 
                        placeholder="Descrição" 
                        required
                        {...register('description')}
                    />
                    <input 
                        className="bg-gray-900 placeholder-gray-500 rounded-md border-none text-gray-300 p-4"
                        type="number" 
                        placeholder="Preço" 
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input 
                        className="bg-gray-900 placeholder-gray-500 rounded-md border-none text-gray-300 p-4"
                        type="text" 
                        placeholder="Categoria" 
                        required
                        {...register('category')}
                    />

                    <Controller 
                        control={control}
                        name="type"
                        render={({ field }) => {                            
                            return (
                                <RadioGroup.Root 
                                    className="grid grid-cols-2 gap-4 mt-2"
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <RadioGroup.Item value="income" className="group bg-gray-700 text-gray-300 py-4 flex items-center justify-center gap-2 rounded-md transition ease-in-out data-[state=checked]:bg-green-700 data-[state=checked]:text-gray-50 data-[state=unchecked]:hover:bg-gray-600">
                                        <ArrowCircleDown className="w-6 h-6 text-green-500 group-data-[state=checked]:text-gray-50"/>
                                        Entrada
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="outcome" className="group bg-gray-700 text-gray-300 py-4 flex items-center justify-center gap-2 rounded-md transition ease-in-out data-[state=checked]:bg-red-700 data-[state=checked]:text-gray-50 data-[state=unchecked]:hover:bg-gray-600">
                                        <ArrowCircleUp className="w-6 h-6 text-red-500 group-data-[state=checked]:text-gray-50"/>
                                        Saida
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            )
                        }}
                    />

                    <button 
                        className="w-full py-5 mt-2 text-gray-50 bg-green-500 font-bold rounded-md transition ease-in-out hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60" 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Cadastrar
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}