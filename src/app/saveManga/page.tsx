'use client'

import { useSearchParams } from 'next/navigation'
import React, {useEffect, useState} from "react";
import {MangaDex} from "@/types/mangaDex";
import {getManga, saveManga} from "@/services/mangaService";
import MangaDataDetalhes from "@/components/MangaDataDetalhes";
import ErrorToast from "@/components/ErrorToast";
import SuccessToast from "@/components/SuccessToast";


export default function SaveManga(){
    const [mangaData,setMangaData] = useState<MangaDex| null>(null);
    const [toast, setToast] = useState<'error' | 'success' | null>(null); // Gerenciar toasts
    const searchParams = useSearchParams()
    const uuid = searchParams?.get('id');
    const handleSubmit=async (capLido:number)=> {
        try {
            const data = await saveManga(uuid,capLido);
            setMangaData(data)
            setToast('success');
        }
        catch  {
            setToast('error');
        }
    }
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

    return (
        <div>
            {mangaData && (
                <MangaDataDetalhes value={mangaData} onsubmit={handleSubmit} />
            )}

            {/* Exibe toasts baseados no estado */}
            {toast === 'error' && <ErrorToast title="Erro ao salvar o mangá" />}
            {toast === 'success' && (
                <SuccessToast title={mangaData?.titulo} />
            )}
        </div>
    )   ;

}
