const fs = require("fs")
const [, , n]=process.argv
const quote="hello world 1"

fs.readFile("./cool.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error",err)
    }
    console.log("The content of the file is",data)
})

const niceQuote="\n Make everyday a better one"
fs.appendFile("./nice.txt",niceQuote,(err)=>{
    console.log("Complted")
})


// for(let i=1;i<=n;i++){
//     fs.writeFile(`./Backup/text-${i}.html`,quote,(err)=>{
//             console.log(`completed writing awesome.txt`)
//         })
// }



// fs.writeFile("./text1.html",quote,(err)=>{
//     console.log("completed writing awesome.txt")
// })

// for(let i=1;i<=10;i++){
//     fs.writeFile(`./Backup/text-${i}.html`,quote,(err)=>{
//             console.log(`completed writing awesome.txt`)
//         })
// }


fs.readdir("./Backup",(err,data)=>{
    data.forEach(fileName =>{
        fs.unlink(`./Backup/${fileName}`,(err)=>{
            console.log("Deleted Successfully",fileName)
        })
    })
})