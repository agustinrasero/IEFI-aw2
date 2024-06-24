import express from 'express'

import {readFile, writeFile} from 'fs'

import {join} from 'path'

const app = express()

const ruta = express.Router()  //Ruteo

const app1 = express();


app.use('/rym', ruta)   //localhost:3000/rym/personajes


//Fetch consumir api
let personajes = [];

let arrayMap = [];

fetchp()

async function fetchp(){
    const respuesta = await fetch('https://rickandmortyapi.com/api/character')
    const json = await respuesta.json()
    personajes = json.results;

    //Reconstruimos array
    arrayMap = personajes.map(function(p){
        return{
            id: p.id,
            name: p.name,
            status: p.status,
            species: p.species	
        }
    })
}


ruta.get('/personajes',(req,res)=>{
    res.json(arrayMap)
})

ruta.get('/personajes/:specie',(req,res)=>{
    const especies = req.params.specie
    const filtrado = arrayMap.filter(especie => especie.species === especies)
    /*
    const objeto = filtrado.map(function(p){
        return{
            id: p.id,
            name: p.name,
            status: p.status,
            species: p.species
        }
    }) */

    res.status(200).json(filtrado)
})
    
app.listen(3000)




//Express sin fetch

//.set('Content-Type','text/hmtl')
//.status(200).send('No autorizado')
//.sendStatus(200)


const path = join('./json/productos.json')
app1.get('/productos',(req,res)=>{
    readFile(path,(err,dat)=>{
        if (err) {
            res.status(404).send('Error')
            console.log('error')
        }
        else{
            const jsonData = JSON.parse(dat)
            res.json(jsonData)
        }
    })
})

app1.get('/productos/:id',(req,res)=>{
    const id = req.params.id
    readFile(path,(err,dat)=>{
        if (err) {
            res.status(404).send('Error')
            console.log('error')
        }
        else{
            const jsonData = JSON.parse(dat) //Convertimo a JSON
            let producto = jsonData.productos //Agarramos el arreglo "productos"
            

            const product = producto.find((item) => parseInt(item.id) === parseInt(id)); //econtramos id
            if (product) {
                res.json(product);  // Envía el producto encontrado
            } 

            
        }
    })
})



app1.post('/productos',(req,res)=>{
    readFile(path,(err,dat)=>{
        if (err) {
            res.status(404).send('Error')
            console.log('error')
        }
        else{
            const jsonData = JSON.parse(dat)
            
        }
    })
})





app1.listen(3001)



