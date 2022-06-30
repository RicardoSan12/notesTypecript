import express from "express"
const router = express.Router()

router.get("./", (_request, response) => {
    response.send({Data: "Fetching all diarias!"})
})

router.post("./", (_request, response) => {
    
    response.send("Saved data")
})
export default router