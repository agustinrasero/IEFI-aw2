import express from 'express';




const app = express();

app.use(express.static('publica'))

let personajes = []

let arrayMap = []

async function fetchpersonajes(){
    const respuesta = await fetch('https://rickandmortyapi.com/api/character')
    const json = await respuesta.json()
    personajes = await json.results;

    arrayMap = personajes.map(function(c){
        return{
            id: c.id,
            name: c.name,
            status: c.status,
            species: c.species	
        }
    })

}

fetchpersonajes()






app.get('/personajes',(req,res)=>{
    res.json(arrayMap)
    console.log(req.url)
})


//Species
app.get('/personajes/:species',(req,res)=>{

    const species = req.params
    console.log(species)

    const resultado = personajes.filter(personaje => personaje.species === species.species);
    
    const objeto = resultado.map(function(p){
        return{
            id: p.id,
            name: p.name,
            status: p.status,
            species: p.species
        }
    })

    res.json(objeto)   
   
})



app.listen(3000,()=>{
    console.log("Servidor on: http://localhost:3000")
})



export default arrayMap