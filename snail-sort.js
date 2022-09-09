// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
    // enjoy
    
    
    let firstIdx = array[0]
    let remIdx = array.slice(1)
  
      if(array.length-1 === 0) {
  //  	console.log(array[0])
      return array[0]
    } else if(array.length === 1) {
  //  	console.log(array[0])
      return array[0]
    } else {
      for(let r of remIdx) {
  //      console.log(r[r.length-1])
        let lastIdx = r[r.length-1]
        firstIdx.push(lastIdx)
  //      console.log(r.slice(0,r.indexOf(r[r.length-1])))
              
        let innerIdx = r.slice(0,r.indexOf(r[r.length-1]))
  //       console.log(innerIdx)
        
        let reversedInnerIdx = []
        
        for(let i = 0; i < innerIdx.length; i--) {
  //         console.log(r)
          reversedInnerIdx.push(innerIdx[i]) 
        }
        console.log(reversedInnerIdx)
           
      }
      console.log(firstIdx)
    }
    
    
    
  // console.log(remIdx)
    
  }
  
  // snail([[]]) //, []);
  
  // snail([[1]]) //, [1]);
  
  snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) //, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
  
  //		[1, 2, 3]
  //		[4, 5, 6]
  //		[7, 8, 9]
  
  
  // snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  
  // snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
  
