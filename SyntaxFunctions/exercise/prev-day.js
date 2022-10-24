function prevDay(year, month, day) {
    let prevDay = new Date(year, month - 1, day);
    prevDay.setDate(prevDay.getDate() - 1);
    console.log(prevDay.getFullYear() + "-" + (prevDay.getMonth() + 1)  
    + "-" + prevDay.getDate());
}

prevDay(2016, 9, 30);
prevDay(2016, 10, 1);
prevDay(2022, 3, 1);