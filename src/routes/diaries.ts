import express from "express"
import diaryService from "../service/diaryService"
import toNewDiaryEntry from "../utils"
const router = express.Router()


router.get("/", (_request, response) => {
    response.send(diaryService.getNonSensitiveEntries())
})

router.get("/:id", (request, response) => {
    const diary = diaryService.findById(Number(request.params.id))
    if(!diary) response.sendStatus(404)
    response.json(diary)
})


router.post("/", (request, response) => {
    const newDiaryEntry = toNewDiaryEntry(request.body);

    const addedEntry = diaryService.addDiary(newDiaryEntry);

    response.json(addedEntry);
})




export default router