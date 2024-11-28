"use client";
import SearchForm from "@/components/SearchForm";
import {useState} from "react";
import {getMangas} from "@/services/mangaService";
import {MangaDex} from "@/types/mangaDex";
import MangaDataResumido from "@/components/MangaDataResumido";

export default function Home() {


    const [mangaLink,setMangaLink] = useState('');
    const [mangaData,setMangaData] = useState<MangaDex| null>(null);

    const handleChange = (value: string) => {
        setMangaLink(value); // Atualiza o estado com o novo valor
    };
    const handleSubmit=async (value:string)=>{
        const data = await getMangas(value);
        console.log(data)
        setMangaData(data)
    }


  return (
      <div className="container mx-auto">
          <main className="">
              <SearchForm value={mangaLink} onChange={handleChange} onsubmit={() => handleSubmit(mangaLink)}/>
              <br/>
              <MangaDataResumido data={mangaData} />
            </main>

       </div>
)
    ;
}
