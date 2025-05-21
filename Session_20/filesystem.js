import fs from "fs";
// fs.writeFileSync("hello.pdf","Hello NodeJS");
// fs.appendFile("helloworld.txt","node js\n","utf8",(err)=>{
//     if(err) throw err;
// });
// let data = fs.readFileSync("hello.pdf","utf-8");
// let data = fs.readFile("helloworld.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// console.log(data);

fs.writeFile("mydata.txt","Hello","utf8",(err)=>{
    if(err){
        console.log(err);
    }
});
fs.appendFile("mydata.txt","Welcome to MERN Training\n","utf8",(err)=>{
    if(err){
        console.log(err);
    }
})
fs.readFile("mydata.txt","utf8",(data,err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});