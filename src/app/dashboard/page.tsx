'use client'

import {useEffect, useState} from "react";
import {getAll} from "@/services/mangaService";
import {MangaDex} from "@/types/mangaDex";
import MangaDataResumido from "@/components/MangaDataResumido";

export default function Dashboard() {
    const [mangas,setMangas] = useState<MangaDex[]|null>(null);
    const getAllMangas =async ()=>{
        const data = await getAll();
        if(!data) return;
        setMangas(data);
    };
    useEffect(() => {
        getAllMangas();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {mangas?.length ==0 && <h3>Sem Mangas Cadastrados</h3>}
            {mangas?.map((item) => (
                <div key={item.uuid} className="flex flex-col items-stretch ">
                    <MangaDataResumido key={item.uuid} data={item}/>
                </div>

                    ))}
                </div>

            )

            }