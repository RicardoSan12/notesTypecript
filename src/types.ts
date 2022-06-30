export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

// export interface secretDiaryEntry extends DiaryEntry {
//     stars: number;
// }



// export type DiaryEntry2 = {
//     id: number;
//     date: string;
//     weather: Weather;
//     visibility: Visibility;
//     comment: string;
// }

// export type secretDiaryEntry2 = DiaryEntry2 & {
//     stars: number
// }