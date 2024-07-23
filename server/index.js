import express from 'express'
import fs from 'fs'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors()); //cors policy
app.get('/',  (req,res) =>{
    let table = fs.readFileSync('./assets/newdata.json', "utf-8")
    res.json(JSON.parse(table))
})

app.listen(3001, () => { console.log("Listen on 3001")})
