//printFull Name

function printFullName(firstName,secondName){
    console.log(firstName+ " "+ secondName);
}

printFullName("Joseph", "Mosaad");












//age

function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
console.log( getAge(new Date(1993, 06, 24)) +" years");














//capitalize, 2 functions
function capitalizeString(string){
 string =  string.charAt(0).toUpperCase() + string.slice(1);
 return string;
}
 console.log(capitalizeString ("hello world!"));


function sentenceCase(input, lowercaseBefore) {
    if (lowercaseBefore) { input = input.toLowerCase(); }
    return input.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
        return separator + char.toUpperCase();
    });
}
var str = "hello world. it's a lovely day. i should go out";
str = sentenceCase(str);
console.log(str); 







//oddishOr Evenish

function oddishOrEvenish(number){
    let sum = 0;
    while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
    let reminder = sum % 2;
    if (reminder == 0) {
        console.log("Evenish");
    } 
    else if (reminder == Math.round(reminder)) {
        console.log("Oddish");
    } 
    else {
        console.log("invalid");
    }
}
oddishOrEvenish(4433);




//seven boom!

function sevenBoom (arr){
    if (arr.includes(7) == true) {
        console.log ("Boom!");
    }
    else {
        console.log("there is no 7 in the array");
    }
    }
    sevenBoom([1, 2, 3, 4, 5, 6, 7]);



//diff in days

    var getDays = function(date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
        }

        console.log(getDays('December 29, 2018', 'January 1, 2019'));
      

//count was testing it and it failed ,







        function compressArray(original) {
 
            var compressed = [];
            // make a copy of the input array
            var copy = original.slice(0);
         
            // first loop goes over every element
            for (var i = 0; i < original.length; i++) {
         
                var myCount = 0;	
                // loop over every element in the copy and see if it's the same
                for (var w = 0; w < copy.length; w++) {
                    if (original[i] == copy[w]) {
                        // increase amount of times duplicate is found
                        myCount++;
                        // sets item to undefined
                        delete copy[w];
                    }
                }
         
                if (myCount > 0) {
                    var a = new Object();
                    a.value = original[i];
                    a.count = myCount;
                    compressed.push(a);
                }
            }
         
            return compressed;
        };
        
        // It should go something like this:
        
        var testArray = new Array("dog", "dog", "cat", "buffalo", "wolf", "cat", "tiger", "cat");
        var newArray = compressArray(testArray);
         

       

        
        
        
        
        