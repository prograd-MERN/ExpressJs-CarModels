const express = require('express');
const app = express();
const PORT = 4000;
app.get('/api/getAllusers',(req,res) => {
    let obj = {
        id: 1,
        user: "Bala",
        department: "CSE",
        password:565464,
        age:20
    }
    res.send(obj);
});
app.get('/api/getUsers',(req,res) => {
    // req.query.id
     let qs = req.query;
     console.log(qs);
     res.send(`This is your name : ${qs.name} and your ID is : ${qs.id}`)
    // res.send(req.query);
});
app.get('/api/getQueryParams/:name/:id',(req,res) => {
console.log("first parameter")
res.send(`This is your name : ${req.params.name} and your ID is : ${req.params.id}`);
})
const itRoutes = require('./routes/itRoutes')
app.use('/api/CarModels',itRoutes)
app.listen(PORT , () => {
    console.log(`Server started running at ${PORT}`)
});