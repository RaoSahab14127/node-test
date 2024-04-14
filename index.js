// const brother = require("./umair")
// console.log(brother)

// console.log(brother.Brother(1,3));
const fs= require("fs")

// fs.writeFileSync("text.txt", "Hammad");
// fs.writeFile("text.txt", "Hammad", (err)=>{err});

// var a =fs.readFile("text.txt", "utf-8", (err, res)=>{
// if(err){
//     console.log(err)
// }
// else{
//     console.log(res)
// }
// });

// fs.appendFileSync("text.txt", "\n"+"sdfasdf"+ new Date().getDate().toLocaleString())

// fs.unlinkSync("text.txt")
// console.log(fs.statSync("text.txt").isFile());

fs.mkdirSync("rao/a/o", {recursive: true});