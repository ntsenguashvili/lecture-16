//task 1

function wholeNum(x) {
    if (x%3===0) {
        return true
    }
    else{
        return false
    }
}

console.log(wholeNum(5))
console.log(wholeNum(9))
console.log(wholeNum(15))

//task 2

const currencySymbolFrom={
USD:"$",
EUR:"€",
GEL:"ლ"
}
function getCurrencySymbolFromCode(countryCode){
    return currencySymbolFrom[countryCode]
}
console.log(getCurrencySymbolFromCode("USD"))
console.log(getCurrencySymbolFromCode("EUR"))
console.log(getCurrencySymbolFromCode("GEL"))

//task 3

function toUpper(value){
    return value.toUpperCase()
}

console.log(toUpper("my name is joe"))

//task 4

function profit(salePrice, basePrice){
   let dif=salePrice-basePrice
   return prof=salePrice/100*dif
}
console.log(profit(155,67))

//task 5

function findEven(numArray){
    
    let x =numArray.filter((number)=>number % 2 ==0)
    return x;
}

let evens = findEven([1,3,2,4,7]);
let evens2 = findEven([3,5,7,88]);
console.log(`${evens} ; ${evens2}`)

//task 6

let database = [
    {name:"test1", value: 1},
    {name:"test2", value: 2},
    {name:"test3", value: 3},
]

function findName(nameToFind){
    return database.find((data) => data.name === nameToFind )
}

console.log(findName("test2"))