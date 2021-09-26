// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {

  const timeAndLitres = parseInt(time);

  console.log(Math.floor(timeAndLitres / 2))


  // const timeAndLitres = Math.round(time);
  // console.log(Math.floor(timeAndLitres / 2));
}




// function litres(time) {
  //soultion a
  // 0 soltion b works ------ more than 2

  // -0 soultion a works but need to get rid of minus -----less than 2

  // 5 soltion b works ------ more than 2
  // -0 soultion a works but need to get rid of minus  -----less than 2
  // 5 soultion a works --- more than 2 
  // 893 soultion a works --- more than 2
  // -1 soltion b -----less than 2
  //soultion a
  //     const newTime = Math.round(time);
  //   const waterDrank = newTime / 2 - 1;
  //   console.log(Math.round(waterDrank));
  //soltion b
  // 1;
  // 1;
  // 6;
  // 0;
  // 6;
  // 894;
  // 0;
  //      console.log(Math.round(time / 2)); 

  // c

//   if (time < 2) {
    // console.log(Math.round(time / 2));}
//   } else if (time > 2) {
    // const newTime = Math.round(time);
    //    const waterDrank = newTime / 2 - 1;
    //    console.log(Math.round(waterDrank));}
//   }



litres(2)
litres(1.4)
litres(12.3)
litres(0.82)
litres(11.8)
litres(1787)
litres(0)
