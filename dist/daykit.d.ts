/**
 * Creates a new DayKit instance.
 * @public
 */
export declare const createDayKit: CreateDayKitType;

/**
 * Creates a new DayKit instance.
 * @public
 */
export declare type CreateDayKitType = () => IDayKit;

export declare const getCalendarDetails: getCalendarDetailsType;

export declare type getCalendarDetailsType = () => IDateInfo;

export declare const goToNextDay: goToNextDayType;

export declare type goToNextDayType = () => void;

export declare const goToNextMonth: goToNextMonthType;

export declare type goToNextMonthType = () => void;

export declare const goToNextYear: goToNextYearType;

export declare type goToNextYearType = () => void;

export declare const goToPreviousDay: goToPreviousDayType;

export declare type goToPreviousDayType = () => void;

export declare const goToPreviousMonth: goToPreviousMonthType;

export declare type goToPreviousMonthType = () => void;

export declare const goToPreviousYear: goToPreviousYearType;

export declare type goToPreviousYearType = () => void;

export declare interface IDateInfo {
    day: number;
    month: number;
    year: number;
    days: (number | null)[][];
}

export declare interface IDayKit {
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

export declare interface IDayKitOptions {
    readonly day?: number;
    readonly month?: number;
    readonly year?: number;
    readonly plugins?: IDayKitPlugin[];
}

export declare type IDayKitPlugin = () => {
    init: (daykit: IDayKit) => void;
    apply: (daykit: IDayKit) => void;
};

export declare type WithInstance<T> = (fn: (daykit: T) => void) => void;

export { }
