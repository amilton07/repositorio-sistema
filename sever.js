const express = require("express")
const {z, ZodError} = require("zod")
const app = express()

app.use(express.json())

app.get("/professores", function(req,res){
    res.status(200).json([])
})


app.post("/professores", function(req, res) {
    try{
        const{nome, email , matricula }= req.body
        console.log("nome", nome)
        console.log("email", email )
        console.log("matricula", matricula)
        res.status(200).send()
    }catch(err){

    }
  
})
 
 app.post("/professores",function(req,res){
    try{
        const schema= z.object({
            nome: z.string(),
            email: z.string().email(),
            matricula: z.string()

        })   
        const{nome,email,matricula}=schema.parse(req.body)
            
        console.log("nome",nome)
        console.log("email",email)
        console.log("matricula",matricula)

        res.status(200)
    }catch(err){
        if(err instanceof ZodError){
            res.status(422).send(err.message)
            return
        }
        res.status(500).send(err.message)
    }
            

})


 
 app.listen(333, function(){

    console.log(`vai viu, pai e gueto `)
})







