// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a string. 
// For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = "cnet"

function domainName(url){
    //your code here
    
    console.log(url)
    
    let arr = url.split("") // convert url string to array
    
      let arrLen = arr.length-1 // check length of array
    
    let firstIdx = arr.indexOf("/")+2 // check if array contains '/'
    
    console.log(firstIdx)
    
    let lastIdx = arr.indexOf(".")+1
    
    if( arr.includes("//") ) {
      
      let firstSlice = arr.slice(lastIdx, arrLen)
      let secondSlice = firstSlice.slice(0,firstSlice.indexOf("."))
      
      let urlSlice = ""
      
      for(s of secondSlice) {
        urlSlice += s
      }
      
      return urlSlice 
      
    } else if( url.includes("//") && url.includes("www") ) {
      
      let firstSlice = url.slice(url.indexOf(".")+1, url.length-1)
      let secondSlice = firstSlice.slice(0,firstSlice.indexOf("."))
      
      let urlSlice = ""
      
      for(s of secondSlice) {
        urlSlice += s
      }
      
      return urlSlice
      
    } else if( !url.includes("//") && !url.includes("www") ) {
      
      let firstSlice = url.slice(0, url.indexOf(".")+1)
      let secondSlice = firstSlice.slice(0,firstSlice.indexOf("."))
      
      let urlSlice = ""
      
      for(s of secondSlice) {
        urlSlice += s
      }
      
      return urlSlice
      
    } else if( url.includes("www") ) {
      
      let firstSlice = url.slice(url.indexOf(".")+1, url.length-1)
      let secondSlice = firstSlice.slice(0,firstSlice.indexOf("."))
      
      let urlSlice = ""
      
      for(s of secondSlice) {
        urlSlice += s
      }
      
      return urlSlice
      
    } else {
      
      let firstSlice = arr.slice(firstIdx, arrLen)
      let secondSlice = firstSlice.slice(0,firstSlice.indexOf("."))
      
      let urlSlice = ""
      
      for(s of secondSlice) {
        urlSlice += s
      }
      
      return urlSlice
    }
    
  
  }
  
  // domainName("http://google.com") //, "google"
  // domainName("http://google.co.jp") //, "google"
  // domainName("www.xakep.ru") //, "xakep"
  // domainName("https://youtube.com") //, "youtube"
  // domainName("https://www.3pq2a2fx3hq0p-itt8tn.br") //, "3pq2a2fx3hq0p-itt8tn"
  // domainName("nw2l689.io/index.php") //, "nw2l689"
  // domainName("icann.org") //, "icann"
  // domainName("p566p-cdvih1i82n4qbj9a4.biz/users") //, "p566p-cdvih1i82n4qbj9a4"  




