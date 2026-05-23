const express =require("express");
const app =  express();
const http = require("http").createServer(app);
const io = require("socket.io")

app.use(express.static("public"));


let users = {
    "key" : "VALUE"
};

io.on("connection", socket=>
{
    //join
    socket.on("join",username => {
        
    })
}
)





const PORT = 3000;

http.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})