import diaryData from "../diaries.json"

import { DiaryEntry } from '../types'

const diaries: Array<DiaryEntry> = (diaryData as DiaryEntry[])

const getDiaries = (): Array<DiaryEntry> => {
    return diaries
}

const saveDiary = () => undefined


export{
    getDiaries,
    saveDiary
}