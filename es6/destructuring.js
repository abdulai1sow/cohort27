//destructuring objects

const user = {
  name: 'abe',
  age: 30,
  cohort: '27',
  isStudent: true
}
const {name, age} = user
console.log(name,age);

//destructuring arrays
const devs = ['diallo', 'sow', 'mane']
const [dev1,dev2,dev3] = devs
console.log(deva);

//function
const hook = () => {
  const hookName = 'state'
  const hookSetter = () => { }
  return [hookName, hookSetter]
}
//recalled the function hook
const [state, setState] = hook()
console.log(state);
console.log(setState);