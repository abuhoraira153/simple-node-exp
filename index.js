const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const port = 5000

app.get('/',(req,res)=>{
    res.send('hello wow! from my-second-node automatic start')
})

const users = [
    {id : 0, name : 'sabana', email : 'sabana@gamil.com'},
    {id : 1, name : 'rozina', email : 'rozina@gamil.com'},
    {id : 2, name : 'srabonti', email : 'srabonti@gamil.com'},
    {id : 3, name : 'prinka', email : 'prinka@gamil.com'},
]

app.get('/users',(req,res)=>{
    // use query parameter
    const search =  req.query.search
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})
// dayanamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
// app.Method
app.post('/users',(req,res)=>{
    console.log('hitting the post')
    res.send('inside post')
})


app.get('/fruits',(req,res)=>{
    res.send(['apple','orange','banana'])
})

app.get('/fruits/mangoes',(req,res)=>{
    res.send(['rupali','himsagor'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yammi yammi tok misti fazli amm.')
})

app.listen(port,()=>{
    console.log('Running th port at',port)
})