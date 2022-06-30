import diaryData from "../diaries.json"

import { DiaryEntry, NonSensitiveDiaryEntry } from '../types'

const diaries: Array<DiaryEntry> = (diaryData as DiaryEntry[])

const getDiaries = (): Array<DiaryEntry> => {
    return diaries
}



const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};


const saveDiary = ( ) => {

    return 
}


export default{
    getDiaries,
    saveDiary, 
    getNonSensitiveEntries
}