export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
}
export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;


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