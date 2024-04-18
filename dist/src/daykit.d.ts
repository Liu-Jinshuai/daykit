import { IDayKit, IDayKitOptions, CreateDayKitType, WithInstance, goToNextMonthType, goToPreviousMonthType, goToNextYearType, goToPreviousYearType, goToNextDayType, goToPreviousDayType, getCalendarDetailsType } from "./types/index";
export declare class DayKit implements IDayKit {
    private dateInfo;
    private plugins;
    constructor(options: IDayKitOptions | string);
    getMonthDays(year?: number, month?: number): (number | null)[][];
    getNowDate(): {
        year: number;
        month: number;
        day: number;
    };
    setDay(day: number): void;
    setMonth(month: number): void;
    setYear(year: number): void;
    getDay(): number;
    getMonth(): number;
    getYear(): number;
    getDays(): (number | null)[][];
}
/**
 * Creates a new DayKit instance.
 * @public
 */
export declare const createDayKit: CreateDayKitType;
export declare const withInstanceIsDayKit: WithInstance<IDayKit>;
export declare const goToNextMonth: goToNextMonthType;
export declare const goToPreviousMonth: goToPreviousMonthType;
export declare const goToNextYear: goToNextYearType;
export declare const goToPreviousYear: goToPreviousYearType;
export declare const goToNextDay: goToNextDayType;
export declare const goToPreviousDay: goToPreviousDayType;
export declare const getCalendarDetails: getCalendarDetailsType;
//# sourceMappingURL=daykit.d.ts.map