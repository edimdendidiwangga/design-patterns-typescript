function getData(value: any) {
    return value;
}

console.log(getData("Edim"))
console.log(getData(123))

function myData<T>(value: T) {
    return value
}

console.log(myData("Edim").length)
console.log(myData(123))

const arrowFunc = <T, >(value: T) => {

}