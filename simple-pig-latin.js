// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Attempted Test Case

function pigIt(str){
    //Code here
    
  //   console.log(str);
    
   let strArr = str.split(" ");
    
    let newStr = " ";
    
    for(let s of strArr){
      
      let firstLetter = s[0];
      let secondLetter = s[1];
      let toAdd = 'ay';
      let punctuation = strArr.indexOf("!");
      
      let lastLetter = s[s.length -1];
      
      let extractLetters = s.slice( 1 );
      
  //     console.log(s);
      
      let newWord = `${extractLetters}${firstLetter}${toAdd} `; 
      
      newStr += newWord;
    }
    
    let result = newStr.trim();
    
     if(result.includes("!")) {
       return result.replace("!ay", "!");
     } else if (result.includes("?")) {
       return result.replace("?ay", "?");
     } else {
       return result;
     }
    
  }