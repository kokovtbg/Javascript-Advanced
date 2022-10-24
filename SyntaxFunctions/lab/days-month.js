function countDaysInMonth(month, year) {
    // let countDays;
    // if (month === 1 || month === 3 || month === 5 || month === 7 
    //     || month === 8 || month === 10 || month === 12) {
    //     countDays = 31;
    // } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    //     countDays = 30;
    // } else if (month === 2 && (year % 4 !== 0)) {
    //     countDays = 28;
    // } else if (month === 2 && (year % 4 === 0)) {
    //     countDays = 29;
    // }
    // console.log(countDays);
    const getDays = (month, year) => {
        return new Date(year, month, 0).getDate();
    }
    const daysInMonth = getDays(month, year);
    console.log(daysInMonth);
}

countDaysInMonth(1, 2012);
countDaysInMonth(2, 2012);
countDaysInMonth(3, 2012);
countDaysInMonth(4, 2012);
countDaysInMonth(5, 2012);

