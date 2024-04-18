let _dayKit = null;
class DayKit {
    constructor(options) {
        this.dateInfo = { day: 0, month: 0, year: 0, days: [] };
        this.plugins = [];
        if (Object.prototype.toString.call(options) !== '[object Object]' && options !== '') {
            throw new Error('Invalid options');
        }
        let days = this.getMonthDays();
        let date = this.getNowDate();
        if (typeof options === 'string') {
            this.dateInfo = {
                day: date.day,
                month: date.month,
                year: date.year,
                days: days
            };
        }
        else {
            this.dateInfo.year = options.year || date.year;
            this.dateInfo.month = options.month || date.month;
            this.dateInfo.day = options.day || date.day;
            if (options.plugins && typeof options.plugins === 'object') {
                this.plugins = options.plugins;
            }
        }
        this.plugins.forEach(plugin => {
            plugin().init(this);
        });
        return this;
    }
    getMonthDays(year = this.dateInfo.year, month = this.dateInfo.month) {
        let monthLen = new Date(year, month, 0).getDate();
        let monthDays = new Array(monthLen).fill(0).map((_, i) => i + 1);
        let weeks = [];
        let week = [];
        const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
        for (let i = 0; i < firstDayOfWeek; i++) {
            week.push(null);
        }
        monthDays.forEach(day => {
            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }
            week.push(day);
        });
        const lastDayOfWeek = new Date(year, month - 1, monthDays.length).getDay();
        for (let i = lastDayOfWeek; i < 6; i++) {
            week.push(null);
        }
        if (week.length > 0) {
            weeks.push(week);
        }
        return weeks;
    }
    getNowDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return { year, month, day };
    }
    setDay(day) {
        this.dateInfo.day = day;
    }
    setMonth(month) {
        this.dateInfo.month = month;
    }
    setYear(year) {
        this.dateInfo.year = year;
    }
    getDay() {
        return this.dateInfo.day;
    }
    getMonth() {
        return this.dateInfo.month;
    }
    getYear() {
        return this.dateInfo.year;
    }
    getDays() {
        return this.dateInfo.days;
    }
}
/**
 * Creates a new DayKit instance.
 * @public
 */
const createDayKit = () => {
    _dayKit = new DayKit('');
    return _dayKit;
};
const withInstanceIsDayKit = (fn) => {
    if (!_dayKit) {
        throw new Error("DayKit instance not initialized.");
    }
    fn(_dayKit);
};
const goToNextMonth = () => withInstanceIsDayKit((_dayKit) => {
    _dayKit.setMonth(_dayKit.getMonth() + 1);
});
const goToPreviousMonth = () => withInstanceIsDayKit((_dayKit) => {
    _dayKit.setMonth(_dayKit.getMonth() - 1);
});
const goToNextYear = () => withInstanceIsDayKit((_dayKit) => {
    _dayKit.setYear(_dayKit.getYear() + 1);
});
const goToPreviousYear = () => withInstanceIsDayKit((_dayKit) => {
    _dayKit.setYear(_dayKit.getYear() - 1);
});
const goToNextDay = () => withInstanceIsDayKit((_dayKit) => {
    _dayKit.setDay(_dayKit.getDay() + 1);
});
const goToPreviousDay = () => withInstanceIsDayKit((_dayKit) => {
    _dayKit.setDay(_dayKit.getDay() - 1);
});
const getCalendarDetails = () => {
    if (!_dayKit) {
        throw new Error("DayKit instance not initialized.");
    }
    return {
        day: _dayKit.getDay(),
        month: _dayKit.getMonth(),
        year: _dayKit.getYear(),
        days: _dayKit.getMonthDays(_dayKit.getYear(), _dayKit.getMonth())
    };
};

export { createDayKit, getCalendarDetails, goToNextDay, goToNextMonth, goToNextYear, goToPreviousDay, goToPreviousMonth, goToPreviousYear };
