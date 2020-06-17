//printFull Name function

function printFullName(firstName,secondName){
    console.log(`${firstName} ${secondName}`);
}

printFullName("Joseph", "Mosaad");





//age function

function ageToToday(d1, d2=new Date()){

    var diff = d2.getTime() - d1.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365.25));
}
console.log(ageToToday(new Date(1993, 06, 24)) +" years");



//age function 2
function getAge2(d1, d2=new Date()){

  
    return Math.floor((Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()) - Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate()) ) /(1000 * 60 * 60 * 24));
}
console.log( getAge2(new Date(1993, 06, 24)) +" days");






//capitalize, 2 functions
function capitalizeString(string){
 string =  string.charAt(0).toUpperCase() + string.slice(1);
 return string;
}
 console.log(capitalizeString ("hello world!"));



function sentenceCase(input) {
    return input.toString().replace( /(^|\. *)([a-z])/g, function(match,separator, char) {
        return separator + char.toUpperCase();
    });
}
var str = "hello world. it's a lovely day. i should go out";
str = sentenceCase(str);
console.log(str); 










//oddish Or Evenish function 
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
    else  {
        console.log("Oddish");
    }
}
oddishOrEvenish(4433);



//oddish or evenish 2
function oddishEvenish(number){
    let numberToString=number.toString();
    let sum=0
    for(i=0;i<numberToString.length;i++){
        sum+=parseInt(numberToString[i]);

    }
    return (sum % 2 === 0 ? "Evenish":"Oddish")
}



console.log(oddishEvenish(4433));












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





    
//diff in days function 

    var getDays = function(date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
        }

        console.log(getDays('December 29, 2018', 'January 1, 2019'));
      










    

       

        
        
        
        
        