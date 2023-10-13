const express = require('express')
const routes = express.Router()
const  { 
    SUV,
    Hatchback,
    coupe,
    minivan,
    Van,
    sedanType
} = require('../controllers/ITcontrollers.js')
routes.get("/sedanType",sedanType)
routes.get ("/SUV",SUV)
routes.get ("/Hatchback",Hatchback)
routes.get ("/coupe",coupe)
routes.get ("/minivan",minivan)
routes.get ("/Van",Van)
module.exports=routes