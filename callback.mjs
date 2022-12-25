import { writeFile } from "node:fs"

writeFile("message.txt", "Hello World", "utf8", (error,data)=>{
    if(error){
        console.error(error)
        return
    }
console.log('The file has been saved!')

})