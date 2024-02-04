import { Card, Grid } from "semantic-ui-react";
import {DisplayType} from "."
import { Link } from "react-router-dom";

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
    const {data, displayType}=props;

 
   return(
           <Grid columns={4} left verticalAlign="top" stackable>
            {data.map((displayData:DisplayData)=>(
                <Grid.Column key={displayData.id}>
                    <Card.Group>
                        {/* <Link to={} */}
                        <Card 
                            fluid image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}` }
                            header={   
                                 displayType===DisplayType.Movies ?displayData.title : displayData.name
                            } 
                            description={displayData.overview.slice(0,350)+"..."} 
                            meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`} />
                    </Card.Group>
                    </Grid.Column>
           ) )}
           </Grid> 
            
   ) };