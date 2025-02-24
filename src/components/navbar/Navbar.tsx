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
                    Home

                    <div className='flex gap-4'>
                    <Link to='/temas' className='hover:underline'>Categoria</Link>
                        <Link to= '' onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar


