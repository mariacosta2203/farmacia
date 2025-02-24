import { Link } from "react-router-dom"

function Navbar() {

    function logout(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-950 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Home</Link>

                    <div className='flex gap-4'>
                    <Link to='/categoria' className='hover:underline'>Categoria</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
                        <Link to= '' onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar


