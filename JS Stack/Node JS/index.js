const fs  = require('fs');

 fs.mkdir("This is asyncfolder",(err)=>{
    err ? 
    console.log(err):
    console.log("File successfully created");
 })