const lowerTwentyNumbers = {
  "0" : "zero", "1" : "one", "2" : "two", "3" : "three",
  "4" : "four", "5" : "five", "6" : "six", "7" : "seven",
  "8" : "eight", "9" : "nine", "10" : "ten", "11" : "eleven",
  "12" : "twelve", "13" : "thirteen", "14" : "fourteen", "15" : "fifteen",
  "16" : "sixteen", "17" : "seventeen", "18" : "eighteen", "19" : "nineteen",
}

const twoDigitalNumbers = {
  "20" : "twenty", "30" : "thirty", "40" : "forty", "50" : "fifty",
  "60" : "sixty", "70" : "seventy", "80" : "eighty", "90" : "ninety"
}

module.exports = function toReadable (number) {
  number = number.toString()
  
  switch (number.length){
      case 1:
      return lowerTwentyNumbers[number]
      case 2:
      return twoDigitsNumber(number)
      case 3:
      let hundredDigit = lowerTwentyNumbers[number[0]] + " hundred"
      if(number[1] === "0" && number[2] === "0"){
        return hundredDigit 
      } else if (number[1] === "0"){
        return hundredDigit + " " + lowerTwentyNumbers[number[2]]
      } else {
        let twoDigit = number[1] + number[2]
        return hundredDigit + " " + twoDigitsNumber(twoDigit)
      }
      default:
      return number
  }
}

function twoDigitsNumber(num){
  if (num === Object.keys(lowerTwentyNumbers)[num]){
      return lowerTwentyNumbers[num]
  } else if(num === Object.keys(twoDigitalNumbers)[(num / 10) - 2]){
      return twoDigitalNumbers[num]
  } else {
      let firstDigit = twoDigitalNumbers[num[0] + "0"]
      let secondDigit = lowerTwentyNumbers[num[1]]
      return firstDigit + " " + secondDigit
  }
}