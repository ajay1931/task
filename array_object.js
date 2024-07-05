const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
];
//findAdultNames(people); // ['Alice', 'Charlie']

let adultPeopleNames = () => {
    let adult = people.filter(val => {
        return val.age > 18;
    });
    let peopleName=adult.map(val =>{
        return val.name;
    });
   console.log(peopleName);
}
adultPeopleNames()