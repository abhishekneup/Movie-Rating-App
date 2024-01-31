import {DisplayType} from "."

interface DisplayData{
    id:number;
    overview:string;
    poster_path:number;
    title:string;
    vote_average:number;
    release_date:string;
}

interface Props{
    data:DisplayData[];
    displayType:DisplayType;
}

export const ColumnDisplay=(props:Props)=>{

    return(
        <div>{props.data[0].title}</div>)
};