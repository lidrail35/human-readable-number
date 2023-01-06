module.exports = function toReadable(number) {
  const numberFirst = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numberSecond = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
  if ((number >= 100) & (number < 1000)) { 
    return (numberFirst[Math.floor(number/100)] + ' hundred' + (number%100 ? ' ' + toReadable(number%100):'')); 
  }
   
  if ((number >= 20) & (number < 100)) { 
    return (numberSecond[Math.floor(number/10)-2] + (number%10 ? ' ' + toReadable(number%10):''));
  }
  
  if ((number >= 0) & (number < 20)) { return numberFirst[number]};
  
  }
