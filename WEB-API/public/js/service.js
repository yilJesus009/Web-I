async function getPersonas(){
    const res=await fetch('/api/personas')
    const resJson=await res.json();
    return resJson;
}

async function insertarPersona(nuevaPersona){
    const res = await fetch('/api/personas',{
        method:'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaPersona)
    });
    const resJson = await res.json();
    return resJson;
}

async function eliminarPersona(index){
    const res = await fetch(`/api/personas/${index}`,{
        method: 'DELETE'
    });
    const resJson = await res.json();
    return resJson;
}