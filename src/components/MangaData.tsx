import {MangaDex} from "@/types/mangaDex";

const MangaData=({data,onSubmit}:{data:MangaDex|null;onSubmit:()=>void;})=>{
    const submitHandler=  (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit();
    }
    if(data){
        return (
            <form onSubmit={submitHandler}>
                <div className="box-border p-4 border-4 rounded-lg border-green-200">

                    <div className="flex flex-row">
                        <div className="basis-1/2">
                            Titulo
                        </div>
                        <div className="basis-1/2">
                            quantidade de Cap
                        </div>
                        <div className="basis-1/2">
                            Numero Ultimo Cap
                        </div>
                        <div className="basis-1/2">
                            Nome Cap
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="basis-1/2">
                            {data.titulo}
                        </div>
                        <div className="basis-1/2">
                            {data.quantidadeCapitulos}
                        </div>
                        <div className="basis-1/2">
                            {data.numeroUltimoCapitulo}
                        </div>
                        <div className="basis-1/2">
                            {data.nomeUltimoCapitulo}
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Salvar
                        </button>
                    </div>

                </div>
            </form>
        )
            ;
    }


};
export default MangaData;
