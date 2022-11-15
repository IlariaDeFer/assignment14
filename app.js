const myArr = [5, 7, 11, 21, 22];
const avg = (myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4]) / myArr.length;
console.log(avg);


const student1 = {
  name: 'Mary',
  age: 18,
};
const student2 = {
  name: 'Sali',
  age: 21,
};
const student3 = {
  name: 'Ilo',
  age: 19,
};
const student4 = {
  name: 'Sani',
  age: 25,
};
const student5 = {
  name: 'Ann',
  age: 22,
};

const studentsArr = [student1, student2, student3, student4, student5];
console.log(studentsArr);


const student = {
  firstName: 'Lili',
  lastName: 'Jikia',
  age: 17,
  email: 'lili@gmail.com',
  phoneNumbers: [598704312, 588754982]
};

const text = `User name is ${student.firstName}, user age is ${student.age},  user phone number is ${student.phoneNumbers[0]}.`;
console.log(text);