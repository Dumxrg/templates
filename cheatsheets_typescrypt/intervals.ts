

let checker = setInterval(function() {
    if (document.querySelector('.sc')) {
       console.log('Found it!');
       clearInterval(checker);
    }
 }, 100);

