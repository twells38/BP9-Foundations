// Starting array
// Write your solution below:
let array = [28, 43, -12, 30, 4, 0, -36]
function findTheRange(array) {
    let max = array[0]; // create variable max to store max value. initialize array[0].
    let min = array[0]; // create variable min to store min value. initialize array[0].
    for (let i = 0; i < array.length; i++) { // loop through each index in the array to check and compare max and min value.
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        }
      
    }
    console.log(`min's value is ${min} and max's value is ${max}`)
}
findTheRange(array);

