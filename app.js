const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('hola, soy daniel, institucional. hola, soy oscar, colaborador. hola soy sebastian, colaborador.'); 
  res.send(' hola soy sebastian, colaborador.'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 