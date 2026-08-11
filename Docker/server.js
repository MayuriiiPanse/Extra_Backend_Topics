const express = require("express");

const aap = express();

aap.get('/',(req,res)=>{
    res.status(200).json({
        message : "Hello From Docker Setup!"
    })
})

aap.listen(3000,()=>{
    console.log("Server is running on port 3000");
})