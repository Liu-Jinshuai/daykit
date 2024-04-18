export interface IDayKit {
    readonly getNowDate: () => IDayKitOptions;
    readonly getMonthDays: (year: number, month: number) => (number | null)[][];
    readonly setDay: (day: number) => void;
    readonly setMonth: (month: number) => void;
    readonly setYear: (year: number) => void;
    readonly getDay: () => number;
    readonly getMonth: () => number;
    readonly getYear: () => number;
    readonly getDays: () => (number | null)[][];
}
export type IDayKitPlugin = () => {
    init: (daykit: IDayKit) => void;
    apply: (daykit: IDayKit) => void;
};
export interface IDayKitOptions {
    readonly day?: number;
    readonly month?: number;
    readonly year?: number;
    readonly plugins?: IDayKitPlugin[];
}
export interface IDateInfo {
    day: number;
    month: number;
    year: number;
    days: (number | null)[][];
}
/**
 * Creates a new DayKit instance.
 * @public
 */
export type CreateDayKitType = () => IDayKit;
export type WithInstance<T> = (fn: (daykit: T) => void) => void;
export type goToNextMonthType = () => void;
export type goToPreviousMonthType = () => void;
export type goToNextYearType = () => void;
export type goToPreviousYearType = () => void;
export type goToNextDayType = () => void;
export type goToPreviousDayType = () => void;
export type getCalendarDetailsType = () => IDateInfo;
//# sourceMappingURL=index.d.ts.map