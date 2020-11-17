
// Code your solutions in this file
function writeCards(names, holiday){
   let thankYouArray = [] 
//    create an array to store the messages
    for(let i = 0; i < names.length; i++ ){
        // 1.initialize with a starting point; 2.condition for loop; 3.iteration of loop
       thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    }

    return thankYouArray; 
    // return the new array
    
}

function countDown(number){
    // debugger (add debugger go in console and run countDown(10) see what number is run the method ect.)
   let i = number
while(i >= 0){
    console.log(i--)
}
}
// takes in a number 
// set the counter to that number 
// while the counter is greater than 0 keep -1
