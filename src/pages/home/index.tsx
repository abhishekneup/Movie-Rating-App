import { useState } from "react";
import { Button, Segment } from "semantic-ui-react";
import { ColumnDisplay } from "./column-display";
import { fetchMovies,fetchTVShows } from "./query";
import { useQuery } from "@tanstack/react-query";


export enum DisplayType{
    Movies="movies",
    TVShows="tvshows",
}

 export const Home=()=>{

    const [displayType, setDisplayType] =useState<DisplayType>(DisplayType.Movies)

    const { data: moviedata, isLoading: isLoadingMovies}=useQuery({
        queryKey:["movies"], 
        queryFn: fetchMovies})

    const { data: TVShowsdata, isLoading: isLoadingTVShows}=useQuery({
        queryKey:["tvshows"], 
        queryFn: fetchTVShows})

        if(isLoadingMovies||isLoadingTVShows)
        {
            return <h1>Loading...</h1>        }
        
        
    return(
        <div style={{marginTop:50 }}>
            <Button.Group>
                <Button color={displayType=== DisplayType.Movies? "teal" : undefined} 
                onClick={()=>setDisplayType(DisplayType.Movies)}>
                    Movies
                </Button>
                <Button color={displayType=== DisplayType.TVShows? "teal" : undefined} 
                onClick={()=>setDisplayType(DisplayType.TVShows)}>
                    TVShows
                </Button>

            </Button.Group>
            <Segment raised fluid>
                
            <div style={{marginTop:20, height:"auto"}}>
                {displayType === DisplayType.Movies? (
                    <ColumnDisplay data={moviedata.results} displayType={DisplayType.Movies}/>
                    ) :(
                        <ColumnDisplay data={TVShowsdata.results} displayType={DisplayType.TVShows}/>)
                    }
            </div>
                    </Segment>
        </div>
    )
}

