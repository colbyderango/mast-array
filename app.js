//Write a function called cubed(x) that accepts an argument x and returns its cubed value
function cubed(x){
    return x * x * x
}
//write a function called power that accepts two args (base, exp) and returns the power  
function power(base, exp){
    var power = base
    var i = 1
    while  (i < exp)
        
/*
* write a function called logArr that will log each item in an array
*/
function logArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
/**
    Fill in the necessary parts of the findById function below
*/
var users = [{id: 1, name: 'Jon'},{id: 2, name: 'Yuli'},{id: 21, name: 'Peter'},{id: 17, name: 'St. MaryLou de la playa carmen'},{id: 51, name: 'Doug'},{id: 881, name: 'Paul'},{id: 0, name: 'Jon'},{id: 999, name: 'Timma'}]

function findById(id){
    for (var i = 0; i < users.length; i++){
        var user = users[i]
        if (user.id = id) {
            return user;
        }
    }
    var error = { error: 'user cannot be found'}
}
findById(17) //Should return {id: 17, name: 'St. MaryLou de la playa carmen'}
findById(1000) //Should return 4 {error: 'Sorry that user id could not be found'} ****Upshift Challenge

//Write a function that accepts a name argument and will loop over theBand and return the band member's name and the instrument that he/she plays
//use string concat to return the sentence below 
// [band-members-name] is in the band and plays the [band-members-instrument];
function findBandMembers(bandName){
    for (var i = 0; i < theBand.members.length; i++){
        var bandMember = theBand.members[i]
        if (bandName() = bandMember.name()) {
            var foundMember = bandMember.name + ' is in the band and plays the ' + bandMember.instrument
            return foundMember
        }
    }
}

var theBand = {
    members: [{
        name: 'Johnny P',
        instrument: 'Sax'
    },{
        name: 'River',
        instrument: 'Drums'
    },{
        name: 'Kris',
        instrument: 'Guitar'
    }]
}


 
//write a fn that accepts two arguments a (sentence, letter) have the function return the number of times that letter repeats in the sentence
function findLetter(sentence, letter) {
    var num = 0
    for (var i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) == letter) {
            num += 1
        }
    }
    return num
}

//write a fn called pythagorean(a,b) have it return the value of c^2
function pythagorean(a, b) {
    var sum = (a * a) + (b * b)
}
console.log(2, 3)

/**
    Best Practice: Constructor functions are the only variables that start with an uppercase letter
    The keyword this refers to a single instance
    When calling or invoking a constructor function you must use the *** new *** keyword
*/

//Write a CellPhone constructor function that accepts the following arguments (string: brand, number: screenSize, string: carrier)
function CellPhone(brand, screenSize, carrier) {
    this.Brand = brand
    this.ScreenSize = screenSize
    this.Carrier = carrier
}
//Write a function called sumAll that accepts an array of numbers and returns the sum of all items in the array
function sumAll(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        sum += num
    }
    return sum
}
//write an isEqual function that accepts two arguments and returns a boolean (3,'3') returns false ('abc', 'abc') returns true
function isEqual(a1, a2) {
    return a1 === a2
}
//write a function called inStock that accepts a productId or productName and returns the product if it is in stock based on its quantity

var products =[{
    id: 123,
    name: 'Squaty Potty', 
    url: 'https://www.youtube.com/watch?v=YbYWhdLO43Q',
    quantity: 5,
    price: 19.99
},{
    id: 124,
    name: 'Design Your Own Cage', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/e93da6b3583ea782f5b3814305c16960.jpeg',
    quantity: 0,
    price: 1.99
},{
    id: 125,
    name: 'Worlds Best Chap Stick', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/dde306374cd35acff10f52eb4c586b5d.jpeg',
    quantity: 280,
    price: 0.99
}]

function inStock(productInfo) {
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if  (product.id == productInfo || product.name() == productInfo.()) {
            return 'There are ' + product.quantity + ' in stock'
        }
    }
    return 'Not in Stock'
}