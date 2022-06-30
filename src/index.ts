import express from "express"
import diaryRouter from "./routes/diaries"

const app = express()
app.use(express.json())

app.get("/", (_request, response) => {
    response.send({Good: "Loaded nice"})
})


app.use("/api/diaries", diaryRouter)


const PORT = 3003
app.listen(PORT, () => {
    console.log("Server completed")
})