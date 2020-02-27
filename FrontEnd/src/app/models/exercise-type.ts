export enum ExerciseType {
    CHECKS = 'CHECKS',
    REDACTION = 'REDACTION',
    REORDER = 'REORDER',
    TEST = 'TEST'
}

// tslint:disable-next-line: no-namespace
export namespace ExerciseType {
    export function keys(): ExerciseType[] {
        return [ExerciseType.CHECKS, ExerciseType.REORDER, ExerciseType.TEST];
    }
    export function label(exerciseType: ExerciseType): string {
        switch (exerciseType) {
            case ExerciseType.CHECKS: return 'Checks';
            case ExerciseType.REORDER: return 'Reodernar';
            case ExerciseType.TEST: return 'Test';
        }
    }
}
