import {MangaDex} from "@/types/mangaDex";
import Link from 'next/link';

const MangaDataResumido=({data}:{data:MangaDex|null;})=>{

    if(data){
        return (
            <div>
                <Link
                    href={{
                        pathname: `/saveManga/`,
                        query: {
                            id: data.uuid,
                        },
                    }}
                    className={data.id && "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 disabled"}
                >
                    <div className="relative">
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={data.cover}
                            alt=""
                        />
                        {data.id != '0' && <span
                            className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                        >Salvo   </span>}


                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">{data.titulo}</h5>
                        <p className="mb-3 font-normal">Quantidade de Capitulos: {data.quantidadeCapitulos}</p>
                        <p className="mb-3 font-normal">Lidos: {data.capLido}</p>
                    </div>
                </Link>
            </div>
        );
    }


};
export default MangaDataResumido;
