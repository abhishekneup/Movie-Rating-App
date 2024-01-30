export const mutationLogin = async () =>{
   const res =await fetch("https://api.themoviedb.org/3/authentication/guest_session/new",   
    {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2I4MzcyYTUwMzRmMTAwMzA5OGM0MmMyMDA0N2ZjNCIsInN1YiI6IjY1YjUzNjQ2NGYzM2FkMDEzMTBiYTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GaGOql3_7LGBvGviuj2yHcOCv__yxMwgsXhaOKu1dR0" 
    },
}
   );


    
console.log(res.json);

return res.json();

}