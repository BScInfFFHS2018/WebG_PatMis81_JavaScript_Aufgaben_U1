function checkLeapYear(inputYear) {
    let leapYear;
    // If year is divisible by four and not by hundred or if the year is divisible by four hundred it is a leap year
    if(((inputYear % 4) === 0) && ((inputYear % 100) !== 0) || ((inputYear % 400) === 0)) {
        leapYear = "ja";
    } else {
        leapYear = "nein";
    }
    return leapYear;
}