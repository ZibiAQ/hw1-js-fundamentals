// Homework 1: JavaScript Fundamentals
// Name: Aoqing Chen
// Date: 2/2/2026


const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];


function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

 
function average (arr) {
  return sum(arr) / arr.length;
}


function min(arr) {
    return Math.min(...arr);
}


function max(arr) {
    return Math.max(...arr);
}



//part 2
function capitalize (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function reverse (str){
  return str.split('').reverse().join('');
} 


function countVowels (str){
  const vowels = 'aeiou';
  let count = 0;  
  for (let char of str){
    if (vowels.indexOf(char) !== -1){
      count++;
    }
  }
  return count;
} 



//part 3
  const student = {
  name: "Aoqing Chen",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  getAverage: function() {
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  },
  
  isHonorRoll: function() {
    return this.getAverage() >= 85;
  }
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());

