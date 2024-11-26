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
    const saveManga=async (value:MangaDex|null)=>{
        if(value){
            console.log("salvando manga" + value.titulo);
            setMangaData(null)
            setMangaLink("")
        }
    }

  return (
      <div className="container mx-auto">
          <main className="">
              <SearchForm value={mangaLink} onChange={handleChange} onsubmit={() => handleSubmit(mangaLink)}/>
              <br/>
              <MangaData data={mangaData} onSubmit={()=>saveManga(mangaData)}/>
            </main>

       </div>
)
    ;
}
