import express from "express" 
import cors from "cors"

export const sbrn=express()
sbrn.use(cors())
sbrn.use(express.json())

sbrn.get("/sbrn-get",async(req,res)=>{
    res.json({
        message:"message from backend hihi haha serious not :)"
    })
})


