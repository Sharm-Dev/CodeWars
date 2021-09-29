// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    return array.map(sum => -sum); 
    }

   

    // array.map(sum => {
    //     Math.abs(sum);
    //     console.log(sum)
    // }, [])
    
    // array=array.map(sum => Math.abs(sum));
    // console.log(array);




invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5]);
invert([]);
invert([0]);