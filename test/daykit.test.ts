import { DayKit } from '../src/daykit';

describe('DayKit', () => {
  let dayKit: DayKit;

  beforeEach(() => {
    dayKit = new DayKit('');
  });

  it('should initialize with current date if no options are provided', () => {
    const now = new Date();
    expect(dayKit.getYear()).toBe(now.getFullYear());
    expect(dayKit.getMonth()).toBe(now.getMonth() + 1);
    expect(dayKit.getDay()).toBe(now.getDate());
  });

  it('should initialize with provided options', () => {
    const options = {
      year: 2022,
      month: 10,
      day: 15,
      plugins: []
    };
    dayKit = new DayKit(options);
    expect(dayKit.getYear()).toBe(options.year);
    expect(dayKit.getMonth()).toBe(options.month);
    expect(dayKit.getDay()).toBe(options.day);
  });

  it('should throw an error if invalid options are provided', () => {
    expect(() => {
      new DayKit('invalid options');
    }).toThrow('Invalid options');
  });

  it('should set the day', () => {
    dayKit.setDay(20);
    expect(dayKit.getDay()).toBe(20);
  });

  it('should set the month', () => {
    dayKit.setMonth(5);
    expect(dayKit.getMonth()).toBe(5);
  });

  it('should set the year', () => {
    dayKit.setYear(2023);
    expect(dayKit.getYear()).toBe(2023);
  });

  it('should return the month days', () => {
    const monthDays = dayKit.getMonthDays();
    expect(monthDays).toHaveLength(5); // Assuming the current month has 5 weeks
    expect(monthDays[0]).toHaveLength(7); // Assuming each week has 7 days
    expect(monthDays[0][0]).toBeNull(); // Assuming the first day of the month is not on Sunday
  });

  it('should return the current date', () => {
    const now = new Date();
    const currentDate = dayKit.getNowDate();
    expect(currentDate.year).toBe(now.getFullYear());
    expect(currentDate.month).toBe(now.getMonth() + 1);
    expect(currentDate.day).toBe(now.getDate());
  });

  // Add more tests for other methods and functionalities

});