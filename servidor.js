const express = require ('express');
const app = express();
const PORT = 3000;
app.use(express.json()); 
 let tareas = [ 
 {id:1, tarea: 'Dormir'},
 {id:2, tarea: 'Desayunar'},
 {id:3, tarea: 'Bañarme'},
 {id:4, tarea: 'Tender mi cama'},
 {id:5, tarea: 'Trapear'},
];
 
app.get('/tareas',(req, res)=>{ 
    res.json(tareas); 

});

app.get('/tareas/:id',(req,res)=>{ 
    const id= parseInt(req.params.id);
    const tarea= tareas.find (e=> e.id===id); 
    if(tarea){
        res.json(tarea);
    } else {
        res.status(404).send('tarea no encontrada'); 
    }
})
app.get('/api/greet',(req,res)=>{
    res.json({message: 'Esta es la primera API que hago!'});
})

app.listen(PORT,() =>{ 
    console.log('Servidor corriendo en http://localhost:$PORT');
});

app.post('/tareas',(req,res)=>{ 
    const nuevotarea = { 
        id:tareas.length1, 
        nombre:req.body.nombre 
    };
    tareas.push(nuevo);
    res.status(201).json(nuevotarea); 
});


app.put('/tareas/:id',(req,res)=>{
    const id=parseint(req.params.id);
    const tarea = tareas.find(e=>e.id===id);
    if(tarea) {
        tarea.nombre=req.body.nombre;
        res.json(tarea);
    } else {
        res.status(404).send('tarea, no encontrada')
        
    }
})


app.delete('/tareas/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = tareas.findIndex(i =>i.id===id);
    if (tarea!==-1){
        items.splice(index,1);
        res.send('tarea eliminada');
    } else 
        res.status(404).send('tarea no encontrada');
});

