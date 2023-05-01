// Code your solution in this file!
const drivers = []

const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = drivers.slice(0, 2);
    return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
    let lastTwo = drivers.slice(-2);
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
   }
}

function fareDoubler(fare) {
    const fareDoubler = createFareMultiplier(2);
    return fareDoubler(fare);
}

function fareTripler(fare) {
    const fareTripler = createFareMultiplier(3);
    return fareTripler(fare);
}

function selectDifferentDrivers(drivers, driverSelection) {
    let selection = driverSelection(drivers);
    return selection;
}