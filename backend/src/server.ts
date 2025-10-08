import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res)=>{ //teste da api
    res.send('Api funcionando, contatos'); 
 }
);

//iniciar o server
app.listen(port, ()=>{
    console.log(`Server rodando em http://localhost:${port}`)
 }
);