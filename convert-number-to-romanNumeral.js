
function solution (roman) {

    const lookupTable = {
      M  : 1000,
      CM : 900,
      D  : 500,
      CD : 400,
      C  : 100,
      XC : 90,
      L  : 50,
      XL : 40,
      X  : 10,
      IX : 9,
      V  : 5,
      IV : 4,
        I  : 1,
    }
    
    let accumulator = '';
    
    for(let num in lookupTable) {
      let numValue = lookupTable[num];
      
      while(numValue <= roman) {
        roman -= numValue;
        accumulator += num;
      }
      
    }
     
       return accumulator;
   }
   
   solution('1989')