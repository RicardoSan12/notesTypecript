import express from "express"
import diaryService from "../service/diaryService"
const router = express.Router()


router.get("/", (_request, response) => {
    response.send(diaryService.getNonSensitiveEntries())
})

router.post("/", (_request, response) => {
    
    response.send("Saved data")
})
export default router