import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-gray-900/75"/>

            <Dialog.Content className="min-w-[32rem] rounded-md p-8 bg-gray-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close>
                    <X className="w-6 h-6 absolute top-8 right-8 text-gray-300 transition hover:text-red-500 leading-none focus-visible:text-green-300"/>
                </Dialog.Close>

                <form action="" className="flex flex-col gap-4 mt-8">
                    <input className="bg-gray-900 placeholder-gray-500 rounded-md border-none text-gray-300 p-4" type="text" placeholder="Descrição" required/>
                    <input className="bg-gray-900 placeholder-gray-500 rounded-md border-none text-gray-300 p-4" type="number" placeholder="Preço" required/>
                    <input className="bg-gray-900 placeholder-gray-500 rounded-md border-none text-gray-300 p-4" type="text" placeholder="Categoria" required/>

                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <button className="bg-gray-700 text-gray-300 py-4 flex items-center justify-center gap-2 rounded-md">
                            <ArrowCircleDown className="w-6 h-6 text-green-500"/>
                            Entrada
                        </button>
                        <button className="bg-gray-700 text-gray-300 py-4 flex items-center justify-center gap-2 rounded-md">
                            <ArrowCircleUp className="w-6 h-6 text-red-500"/>
                            Saida
                        </button>
                    </div>

                    <button className="w-full py-5 mt-2 text-gray-50 bg-green-500 font-bold rounded-md transition ease-in-out hover:bg-green-700" type="submit">Cadastrar</button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}