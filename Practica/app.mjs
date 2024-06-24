import express from 'express'


const app = express()


app.use(express.static('publica'))   //-> Servir archivos del front



function M1(req,res,next){
    if (req.method === 'GET') {
        console.log('Es get')
    }
    next()
}

function M2(req,res,next){
    if (req.method === 'POST') {
        console.log('Es post')
    }
    next()
}


/*let arr = [{nombre:"Juan",edad:10},{nombre:"Pablo",edad:15},{nombre:"Pepito",edad:25}]

app.get('/home',M1,M2,(req,res)=>{
    const arrayMap = arr.map(function(a){
        return {
            nombre: a.nombre,
            edad: a.edad 
        }
                 
        
    })

    res.json(arrayMap)
})  */




app.get('/home',(req,res)=>{
    
})




app.listen(3000)