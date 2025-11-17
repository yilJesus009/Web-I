const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const personas=[
    {
        nombre: 'Juan',
        edad: 25,
    },
    {
        nombre: 'María',
        edad: 30,
    }
];

// endpoints
app.get('/api/personas', (req, res) => {
    res.contentType('application/json');
    res.send(personas);
});

app.post('/api/personas', (req, res) => {
    const persona = req.body;
    const nuevaPersona = { 
        nombre: persona.nombre,
        edad: persona.edad,
    };
    personas.push(nuevaPersona);
    res.send(nuevaPersona);
});

app.put('/api/personas',(req,res)=>{
    const params=req.body;
    /*
    {
        "index":0,
        "person":{"nombre":"María Rene","edad":26},
    }
    */
    
    const persona = params.person;
    const index = params.index;
    const personaExistente = personas[index];    

    if(!personaExistente){
        res.status(404).send('La persona no fue encontrada');
        return;
    }
    personaExistente.nombre = persona.nombre;
    personaExistente.edad = persona.edad;
    res.send(personaExistente);
});

app.delete('/api/personas/:index',(req,res)=>{
    const index=req.params.index;
    const personaExistente = personas[index];
    if(!personaExistente){
        res.status(404).send('La persona no fue encontrada');
        return;
    }
    personas.splice(index,1);
    res.send(personaExistente);
});


app.listen(3000,() => {
    console.log('Servidor escuchando en el puerto 3000');
});