import { ExerciseType } from './exercise-type';

export interface ExerciseOption {
    id?: string;
    option: string;
    answer?: number;
}

export interface Exercise {
    id?: string;
    question: string;
    exerciseType: ExerciseType;
    exerciseOptions: ExerciseOption[];
}
