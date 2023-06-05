// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((a, b) => {
    return a + b;
    })
    let sum2 = arr2.reduce((c, d) => {
    return c + d;
    })
    return sum1 + sum2;
    }
    
    