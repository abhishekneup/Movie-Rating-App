import { useState } from "react";
import { Button } from "semantic-ui-react";

enum DisplayType{
    Movies="movies",
    TVShows="tvshows",
}

export const Home=()=>{

    const [displayType, setDisplayType] =useState<DisplayType>(DisplayType.Movies)

    return(
        <div style={{marginTop:50, height:"auto"}}>
            {""}
            <Button.Group>
                <Button color={displayType=== DisplayType.Movies? "teal" : undefined} 
                onClick={()=>setDisplayType(DisplayType.Movies)}>
                    Movies
                </Button>
                <Button color={displayType=== DisplayType.Tvshows? "teal" : undefined} 
                onClick={()=>setDisplayType(DisplayType.Tvshows)}>
                    TVShows
                </Button>

            </Button.Group>
        </div>
    )
}