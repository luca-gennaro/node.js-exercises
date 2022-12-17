const figlet = require("figlet")

figlet("Hello World!", (err, res)=>{
    if(err){
        console.log("Something went wrong...");
        console.log(err)
        return
    }
    console.log(res);

})
