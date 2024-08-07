//  const math = require('./math');
// const { add } = require("./math");

// // const http = require('http');

// // const server= http.createServer((req,res)=>{
// //     console.log(req.url)
// // res.end("heloo world")
// // })
// // server.listen(4000,()=>{
// //     console.log('server is running on port 4000')
// // });

// let isloggein = true;

// if (isloggein === true) {
//   console.log("you are loggdin");
// } else {
//   console.log("you are note log in");
// }

// console.log(math.add(2, 4));

// os module
const { log } = require('console');
const os = require('os');
const user = os.userInfo();
console.log(user.username);
console.log(os.platform());
console.log(os.arch());
console.log(os.homedir());
const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));


// file module
const fs = require('fs');


// let message = "Ha  again in leran node js"
// fs.writeFile("example.txt",message,(err)=>{
//     console.log(err);
    
// })


fs.readFile('example.txt',"utf-8",(err,data)=>{
    if(err){
        console.log("error");
        
    }
    else{
        console.log(data);
        
    }
})