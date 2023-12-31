const obj = {
    name:'Sajad',
    age:14
}
let a  = Object.seal(obj)
obj.name = 'nihal'
console.log(a);