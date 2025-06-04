function search(query) {
  console.log(`Searching with ${query}`);
}
function searchWithDelay(fn, delay) {
  let lastCall = 0;
  return function(...args){
    let currentCall = Date.now();
    if(currentCall-lastCall < delay){
        return;
    }else{
        lastCall = currentCall;
        fn(...args);
    }
  }
}
const searchWithThrottle = searchWithDelay(search,1000);

searchWithThrottle("s")
searchWithThrottle("sh")
searchWithThrottle("shr")
searchWithThrottle("shre")
searchWithThrottle("shree")
searchWithThrottle("shreek")
searchWithThrottle("shreeka")
searchWithThrottle("shreekar")