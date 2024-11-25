import {MangaDex} from "@/types/mangaDex";

const MangaData=({data}:{data:MangaDex|null})=>{
    if(data){
        return (
            <h1>
                {data.titulo}
            </h1>
        );
    }


};
export default MangaData;
