const express = require('express')
require('./models/db')

const User = require('./models/User')

const app = express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.post('/create-user',async (req,res)=>{
    const user = await User({
        fullname: 'Vithushan Logan',
        email: 'lvithu123@gmail.com',
        password:'1234',
    })
    await user.save();
    res.json(user);
})