"use client";
import SearchForm from "@/components/SearchForm";
import {useState} from "react";
import {getMangas} from "@/services/mangaService";
import {MangaDex} from "@/types/mangaDex";
import MangaData from "@/components/MangaData";

export default function Home() {


    const [mangaLink,setMangaLink] = useState('');
    const [mangaData,setMangaData] = useState<MangaDex| null>(null);

    const handleChange = (value: string) => {
        setMangaLink(value); // Atualiza o estado com o novo valor
    };
    const handleSubmit=async (value:string)=>{
        const data = await getMangas(value);
        setMangaData(data)
    }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="">
          <SearchForm value={mangaLink} onChange={handleChange} onsubmit={() => handleSubmit(mangaLink)} />
          <MangaData data={mangaData}/>
      </main>

    </div>
  );
}
