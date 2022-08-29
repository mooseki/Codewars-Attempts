// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  // Complete this function

  function truncate(number, index = 2) {
    // truncate seconds without rounding
    return +number
      .toString()
      .slice(0, number.toString().indexOf(".") + (index + 1));
  }

  console.log(seconds);

  let years = seconds > 31536000 ? seconds % 31536000 : "";
  // console.log(years)
  let yearsCount =
    truncate(seconds / 31536000, 0) == 1
      ? `${truncate(seconds / 31536000, 0)} year`
      : truncate(seconds / 31536000, 0) > 1
      ? `${truncate(seconds / 31536000, 0)} years`
      : "";
  // console.log(yearsCount)

  let days = seconds > 86400 ? seconds % 86400 : "";
  // console.log(days)
  let daysCount =
    truncate(seconds / 86400, 0) == 1
      ? `${truncate(seconds / 86400, 0)} day`
      : truncate(seconds / 86400, 0) > 1
      ? `${truncate(seconds / 86400, 0)} days`
      : "";
  // console.log(daysCount)

  let hours = seconds > 3600 ? seconds % 3600 : "";
  // console.log(hours)
  let hoursCount =
    (seconds / 3600).toFixed(0) == 1
      ? `${(seconds / 3600).toFixed(0)} hour`
      : (seconds / 3600).toFixed(0) > 1
      ? `${(seconds / 3600).toFixed(0)} hours`
      : "";
  // console.log(hoursCount)

  let minutes = seconds % 60;
  // console.log(minutes)
  let minutesCount =
    (seconds / 60).toFixed(0) == 1
      ? `${(seconds / 60).toFixed(0)} minute`
      : (seconds / 60).toFixed(0) > 1
      ? `${(seconds / 60).toFixed(0)} minutes`
      : "";
  // console.log(minutesCount)

  let second = minutes % 60;
  console.log(minutes);
  let secondsCount =
    second == 1 ? `${second} second` : second > 1 ? `${second} seconds` : "now";
  console.log(secondsCount);

  let result = `${yearsCount}, ${daysCount}, ${hoursCount}, ${minutesCount}, and ${secondsCount}`;

  if (
    result.includes("minute") &&
    !result.includes("year") &&
    !result.includes("day") &&
    !result.includes("hour") &&
    !result.includes("second")
  ) {
    return minutesCount;
  } else if (
    !result.includes("minute") ||
    (result.includes("year") &&
      !result.includes("day") &&
      !result.includes("hour") &&
      result.includes("second"))
  ) {
    return secondsCount;
  } else if (
    result.includes("minute") &&
    !result.includes("year") &&
    !result.includes("day") &&
    !result.includes("hour") &&
    result.includes("second")
  ) {
    return `${minutesCount} and ${secondsCount}`;
  } else if (
    result.includes("minute") &&
    !result.includes("year") &&
    !result.includes("day") &&
    result.includes("hour") &&
    !result.includes("second")
  ) {
    return hoursCount;
  } else if (
    result.includes("minute") &&
    !result.includes("year") &&
    !result.includes("day") &&
    result.includes("hour") &&
    result.includes("second")
  ) {
    return `${hoursCount}, ${truncate(
      hours / 60,
      0
    )} minute and ${secondsCount}`;
  } else if (
    result.includes("minute") &&
    !result.includes("year") &&
    result.includes("day") &&
    result.includes("hour") &&
    result.includes("second")
  ) {
    return truncate(days / 3600, 0) < 2
      ? `${daysCount}, ${truncate(days / 3600, 0)} hour, ${truncate(
          hours / 60,
          0
        )} minutes and ${secondsCount}`
      : truncate(hours / 60, 0) === 1
      ? `${daysCount}, ${truncate(days / 3600, 0)} hour, ${truncate(
          hours / 60,
          0
        )} minute and ${secondsCount}`
      : truncate(hours / 3600, 0) === 0
      ? `${daysCount}, ${truncate(days / 3600, 0)} hours, ${truncate(
          hours / 60,
          0
        )} minutes and ${secondsCount}`
      : `${daysCount}, ${truncate(days / 3600, 0)} hours, ${truncate(
          hours / 60,
          0
        )} minutes and ${secondsCount}`;
  } else if (
    result.includes("minute") &&
    !result.includes("year") &&
    result.includes("day") &&
    result.includes("hour") &&
    result.includes("second")
  ) {
    return truncate(hours / 60, 0) < 1
      ? `${daysCount}, ${truncate(days / 3600, 0)} hour and ${secondsCount}`
      : `${daysCount}, ${truncate(days / 3600, 0)} hours and ${secondsCount}`;
  } else if (
    result.includes("minute") &&
    !result.includes("year") &&
    result.includes("day") &&
    result.includes("hour") &&
    !result.includes("second")
  ) {
    return `${daysCount}, ${truncate(days / 3600, 0)} hours and ${
      hours / 60
    } minutes`;
  } else if (
    result.includes("minute") &&
    result.includes("year") &&
    result.includes("day") &&
    result.includes("hour") &&
    !result.includes("second")
  ) {
    return `${yearsCount}, ${truncate(years / 86400, 0)} days, ${truncate(
      days / 3600,
      0
    )} hours and ${hours / 60} minutes`;
  } else if (seconds === 0) {
    return "now";
  } else {
    return truncate(days / 3600, 0) <= 1
      ? `${yearsCount}, ${truncate(years / 86400, 0)} days, ${truncate(
          days / 3600,
          0
        )} hour, ${truncate(hours / 60, 0)} minutes and ${secondsCount}`
      : `${yearsCount}, ${truncate(years / 86400, 0)} days, ${truncate(
          days / 3600,
          0
        )} hours, ${truncate(hours / 60, 0)} minutes and ${secondsCount}`;
  }
}

// formatDuration(1) // , "1 second"
// formatDuration(62) // , "1 minute and 2 seconds"
// formatDuration(120) // , "2 minutes"
// formatDuration(3600) // , "1 hour"
// formatDuration(1) // , "1 second"
// formatDuration(0) // , "now"
formatDuration(5738430); // , "66 days, 10 hours and 30 seconds"
// formatDuration(6676920) // , "77 days, 6 hours and 42 minutes"
// formatDuration(2336200) // , "27 days, 56 minutes and 40 seconds"
// formatDuration(101956166) // , "3 years, 85 days, 1 hour, 9 minutes and 26 seconds"
// formatDuration(132030240) // , "4 years, 68 days, 3 hours and 4 minutes"
// formatDuration(205851834) // , "6 years, 192 days, 13 hours, 3 minutes and 54 seconds"
// formatDuration(253374061) // , "8 years, 12 days, 13 hours, 41 minutes and 1 second"
// formatDuration(132030240) // , "4 years, 68 days, 3 hours and 4 minutes"
// formatDuration(15731080) // , "182 days, 1 hour, 44 minutes and 40 seconds"
// formatDuration(3662) // , "1 hour, 1 minute and 2 seconds"
