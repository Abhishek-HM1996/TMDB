import { BASE_URL } from "../constants";

export async function get(endpoint:string){
    try{
        const resp= await fetch(`${BASE_URL}/${endpoint}`,{headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTc0N2FhY2RiMGY5NGMzZDZmYWQxMmJmN2QzNGQzMCIsIm5iZiI6MTcyMDU1MTM1NS45NTQzODQsInN1YiI6IjY0YjRlYTAyZTBjYTdmMDE0NDJhZTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6h_wbXPT3AD16sbuIdk-lagOdThRgSCLHcm4t03dQM`,
            'Content-Type': 'application/json'
          }})
        const data= await resp.json()
        return data;
    }
    catch(err){
     console.log(err)
    }
    
}