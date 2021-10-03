// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.


//used a for loop 
var number = function (busStops) {
  // Good Luck!
  let onTheBus = 0;
  let offTheBus = 0;
    for(let i = 0; i < busStops.length; i++){
      onTheBus += busStops[i][0];
      offTheBus += busStops[i][1];
    }
    return onTheBus - offTheBus
}


//using reduce

// function number (busStops) {
//   const headCounts =
//   busStops.reduce((accumulator, current, i) => {
//       accumulator[0] += current[0] 
//       accumulator[1] += current[1]
//       accumulator[1] += current[2]
//       accumulator[1] += current[3]
        
//       console.log(
//         "index", i, "\n",
//         "accumulator", accumulator, "\n",
//         "onTheBus", current[0], "\n",
//         "offTheBus", current[1], "\n",
//         "current", current, "\n",
//         "onTheBusTotal", accumulator[0], "\n",
//         "offTheBusTotal", accumulator[1], "\n",
//       )

//       return accumulator
//     }, [0, 0])
//     console.log(headCounts)
//     console.log(headCounts[0] - headCounts[1])
// } 




//using reduce and map

// function number (busStops) {
//   const headCounts =
//   busStops.reduce((accumulator, current, i) =>     
//       accumulator
//         .map((headCountTotal, i) => 
//           headCountTotal += current[i]
//         )
//     , [0, 0])

//     console.log(headCounts[0] - headCounts[1])
// } 

//spread operated / merge two objects 

// const person = {
//   name: "joe"
// }

// const info = {
//   job: "technician"
// }

// const merged = {...person, ...info}

// console.log("merged", merged)









number([
    [10, 0, 8],
    [3, 5, 3],
    [5, 8, 2],
  ]);

  // [2,3,4,5,7]

//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ]);

// number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ]);