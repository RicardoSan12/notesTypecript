import diaryData from "../diaries.json"

import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types'

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

const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};


const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {
    const newDiaryEntry = {
      id: Math.max(...diaries.map(d => d.id)) + 1,
      ...entry
    };
  
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};


export default{
    getDiaries,
    addDiary, 
    getNonSensitiveEntries,
    findById,
}