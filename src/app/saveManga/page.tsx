'use client'

import { useSearchParams } from 'next/navigation'
import {useEffect, useState} from "react";
import {MangaDex} from "@/types/mangaDex";
import {getManga} from "@/services/mangaService";
import MangaDataDetalhes from "@/components/MangaDataDetalhes";


export default function SaveManga(){
    const [mangaData,setMangaData] = useState<MangaDex| null>(null);

    const searchParams = useSearchParams()
    const uuid = searchParams?.get('id');

    useEffect(() => {
        if (!uuid) return;
        console.log(uuid)

        const getMangaById = async ()=>{
            const response = await getManga(uuid);

            if(!response) return;
            setMangaData(response)
        };
    getMangaById();
    },[uuid]);


    return <MangaDataDetalhes value={mangaData} />;

}
