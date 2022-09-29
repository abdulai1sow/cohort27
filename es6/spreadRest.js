//======spread operator
//==arrays
const firstArr = [1, 2, 3, 4]
// console.log(firstArr);
//copy the firstArr
const firstArrCopy = [...firstArr]
firstArrCopy.push(8,9)
// console.log(firstArrCopy);

const secondArr = [...firstArr,5,6,7]

//==objects

const user = {
  name: 'sow',
  age: 20
}

const superUser = {
  ...user,
  isSuperUser: true
}

// console.log(superUser);




//=====rest operator

const sortNums = (...values) => {
  // console.log(values);
  return values.sort()
}
// console.log(sortNums(1, 3, 4, 3, 2, 5, 7, 96, 45, 23, 21, 11, 33,));

const sum = (...args) => {
  //item is the numbers
  return args.reduce((acc, item) => acc + item)
  
}
console.log(sum(1,2,3));