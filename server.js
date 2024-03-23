// call back=============
// const callBack=()=>{
//     console.log("hello world");
// }
// const add=(a,b,callBack)=>{
//     console.log(a+b + " addition");
// }
// add(2,3,callBack)
// let fs=require('fs')
// let os=require('os')

var path=require('path')
const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    const options = {
        root: path.join(__dirname)
    };
 
    const fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})


app.listen(8000,()=>{
    console.log("listened at 8000");
})