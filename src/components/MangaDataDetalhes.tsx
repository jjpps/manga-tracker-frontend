import {MangaDex} from "@/types/mangaDex";
import React, {useState} from "react";

const MangaDataDetalhes =({value,onsubmit}:{
    value: MangaDex | null;
    onsubmit:(capLido:number)=>void;   }
    )=>{
    const [capLido, setCapLido] = useState<number>(0);

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const inputCapLido = parseInt(e.target.value,10);
        setCapLido(isNaN(inputCapLido)?0:inputCapLido);
    }

    const submit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      onsubmit(capLido);

    };

    if(!value)
        return <h2> Loading</h2>

    return (
        <form onSubmit={submit}>
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                    <img
                        src="https://mangadex.org/covers/16c34950-954c-4f0d-808e-d8278a546339/9caa16b1-591a-45a1-b5a6-1210316c4ce5.jpg"
                        alt="card-image"/>
                </div>
                <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                        {value.titulo} - {value.status}
                    </h6>
                    <p className="text-slate-600 leading-normal font-light">
                        {value.numeroUltimoCapitulo} - {value.nomeUltimoCapitulo}
                    </p>
                    <hr/>
                    <p className="text-slate-600 leading-normal font-light">
                        Quantidade Total :{value.quantidadeCapitulos}
                    </p>
                </div>
                <div className="p-4">
                    <p className="leading-normal font-normal">
                        Ultimo de Cap lido
                    </p>
                    <input type="number" placeholder={value.quantidadeCapitulos} name="capLido" id="capLido"
                           className="leading-normal text-base rounded w-3/6"
                           onChange={handleOnChange}
                    />
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                    <button
                        className="rounded-md bg-green-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit">
                        Salvar
                    </button>
                </div>
            </div>
        </form>


    )

}
export default MangaDataDetalhes;