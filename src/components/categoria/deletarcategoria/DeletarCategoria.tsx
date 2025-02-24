import { RotatingLines } from "react-loader-spinner"
import { deletar } from "../../../service/Service"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function DeletarCategoria() {

        const navigate = useNavigate()

        const [isLoading, setIsLoading] = useState<boolean>(false)
    
    
        const { id } = useParams<{ id: string }>()
    
    

        async function deletarCategoria() {
            setIsLoading(true)
    
            try {
                await deletar(`/categoria/${id}`, {
                    headers: {
                 
                    }
                })
    
                alert('Tema apagado com sucesso')
    
            } catch (error: any) {
                if (error.toString().includes('403')) {
                   
                }else {
                    alert('Erro ao deletar o tema.')
                }
            }
    
            setIsLoading(false)
            retornar()
        }
    
        function retornar() {
            navigate("/categoria")
        }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Tema
                </header>

                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria


