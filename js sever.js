const express = require("express")
 const app = express()

 app.use (express.json)
 app.get ("/", function(req,res){
      res.status(200).json({
        none: "amilton zeca  bruno",
        version:"1.0.0",
         curso:"Info"
      })
 })


  const port = process.env.PORT || 3333
  app.listen(port,function(){
 
    console.log('http runnig server')



})
