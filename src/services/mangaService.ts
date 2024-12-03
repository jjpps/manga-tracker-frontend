import {MangaDex} from "@/types/mangaDex";
import axios from "axios";

export const getMangas = async (url:string):Promise<MangaDex> => {
    const response = await axios.get("http://localhost:8080/manga/",{ params:{
            url:url
        }})
    return response.data;
  
}
export const getManga = async (uuid:string):Promise<MangaDex>=>{
    const response = await axios.get(`http://localhost:8080/manga/${uuid}`)
    return response.data;
}
export const saveManga=async (id:string | undefined | null,capLido:number|undefined):Promise<MangaDex>=>{
    const data = {id:id,capLido:capLido  };
    const response = await axios.post('http://localhost:8080/manga/',data);
    return response.data;
}
export const getAll =async ():Promise<MangaDex[]> => {
    const response = await axios.get(`http://localhost:8080/manga/GetAll`);
    return response.data;

}