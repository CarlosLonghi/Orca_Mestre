import * as Dialog from "@radix-ui/react-dialog";
import { Logo } from "../assets/Logo";
import { NewTransactionModal } from "./newTransactionModal";

export function Header() {
    return (
        <header className="bg-gray-900 pt-10 pb-28">
            <div className="w-full max-w-app m-auto px-6 flex justify-between items-center">
                <Logo/>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button className="font-bold py-4 px-5 bg-green-500 text-gray-50 rounded-md hover:bg-green-700 transition ease-in-out">Nova transação</button>
                    </Dialog.Trigger>

                    <NewTransactionModal/>
                </Dialog.Root>
            </div>
        </header>
    ) 
}