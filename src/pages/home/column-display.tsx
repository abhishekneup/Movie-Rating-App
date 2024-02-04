import {DisplayType} from "."

interface DisplayData{
    id:number;
    overview:string;
    poster_path:number;
    title?:string;
    name?:string;
    vote_average:number;
    release_date:string;
}

interface Props{
    data:DisplayData[];
    displayType:DisplayType;
}

export const ColumnDisplay=(props:Props)=>{

    return(
        <div>{props.displayType===DisplayType.Movies ? props.data[3].title : props.data[3].name}</div>)
};