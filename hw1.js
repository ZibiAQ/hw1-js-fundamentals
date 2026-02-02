function sum (a,b){
  return a + b;
}
console.log(sum(1,2));
 
function average (a,b){
  return sum(a,b) / 2;
}
console.log(average(1,2));

function minimum (a,b){
  if (a < b){
    return a;
  } else {
    return b;
    }
}
console.log(minimum(1,2));

function maximum (a,b){
  if (a > b){
    return a;
    } else {
    return b;
    }   
}
console.log(maximum(1,2));

function capitalize (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('abc'));

function reverse (str){
  return str.split('').reverse().join('');
} 
console.log(reverse('abc'));

function countVowels (str){
  const vowels = 'aeiouAEIOU';
  let count = 0;  
  for (let char of str){
    if (vowels.indexOf(char) !== -1){
      count++;
    }
  }
  return count;
} 
console.log(countVowels('abc'));

const numbers = {
  grades: [91, 81, 82, 55, 66],

  getAverage() { 
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  },

  isHonorRoll() {
   return this.getAverage() >= 70;
 }
};
console.log(numbers.getAverage());
console.log(numbers.isHonorRoll());








