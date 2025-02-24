import { useState } from "react";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria() {


    const [categoria] = useState<Categoria[]>([]);


    return (
        <>
            {categoria.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id}  />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategoria;


