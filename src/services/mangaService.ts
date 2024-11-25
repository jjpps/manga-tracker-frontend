import {MangaDex} from "@/types/mangaDex";
import axios from "axios";

export const getMangas = async (url:string):Promise<MangaDex> => {
    const response = await axios.get("http://localhost:8080/manga/",{ params:{
            url:url
        }})
    return response.data;
  
}