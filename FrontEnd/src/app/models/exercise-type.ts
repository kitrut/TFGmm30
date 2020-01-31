export enum ExerciseType {
    CHECKS = 'CHECKS',
    REDACTION = 'REDACTION',
    REORDER = 'REORDER',
    TEST = 'TEST'
}

export namespace ExerciseType {
    export function keys(): ExerciseType[] {
        return [ExerciseType.CHECKS, ExerciseType.REORDER, ExerciseType.TEST];
    }
    export function label(exerciseType_:ExerciseType): string {
        switch(exerciseType_){
            case ExerciseType.CHECKS: return 'Checks';
            case ExerciseType.REORDER: return 'Reodernar';
            case ExerciseType.TEST: return 'Test';
        }
    }
}
