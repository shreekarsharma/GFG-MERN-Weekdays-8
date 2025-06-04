function searchWithDelay(fn, delay) {
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
        fn(...args);
    }, delay);
    }
}
function search(query) {
  console.log(`Searching for ${query}`);
}
const searchWithDebounce = searchWithDelay(search,1000);
searchWithDebounce("s")
searchWithDebounce("sh")
searchWithDebounce("shr")
searchWithDebounce("shre")
searchWithDebounce("shree")
searchWithDebounce("shreek")
searchWithDebounce("shreeka")
searchWithDebounce("shreekar")
