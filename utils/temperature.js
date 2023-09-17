export function convertToFahrenheit(celcius){
  return parseFloat(celcius * 9/5 + 32).toFixed(1)
}

export function convertToCelcius(fahrenheit){
  return parseFloat((fahrenheit - 32) * 5/9).toFixed(1)
}