//Write a JavaScript program to create another string from a given string with the first character of the given string
// added to the front and back.

let anotherString = (string) => {

    return string[0] + "," + string + "," + string[0];
}
console.log(anotherString("ajayPrakash"));