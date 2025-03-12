

(function iterate(i) {          
    setTimeout(function () {   
       console.log(i);                     
       if (--i) iterate(i);      
    }, 200)
 })(10);

