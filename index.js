function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
/**
 *
 * @param {number} fahrenheit
 * @returns converts fahrenheit to celsius and creates a string that describes the temperature
 */

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);
  console.log(`${fahrenheit}F equals ${celsius}C`);
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

// console.log(describeTemperature(3));
// console.log(describeTemperature(40));
// console.log(describeTemperature(80));
// console.log(describeTemperature(100));
// console.log(describeTemperature(120));

const temperatureInFaherient = prompt(
  "Please provide today's temperature in Fahrenheit"
);
const description = describeTemperature(temperatureInFaherient);

alert(
  `Today is going to be ${convertToCelsius(
    temperatureInFaherient
  )}C, which is ` + description
);
