import { Header } from "../components/header";
import { Summary } from "../components/summary";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <main className="w-full max-w-app mt-16 mx-auto px-6">
                <table className="w-full border-separate border-spacing-y-2">
                    <tbody>
                        <tr>
                            <td className="flex-1">Venda de produto</td>
                            <td className="text-green-300">R$ 1.200,00</td>
                            <td>Venda</td>
                            <td>21/03/2024</td>
                        </tr>

                        <tr>
                            <td className="flex-1">Compra da semana</td>
                            <td className="text-red-300">R$ -100,00</td>
                            <td>Compra</td>
                            <td>19/03/2024</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}