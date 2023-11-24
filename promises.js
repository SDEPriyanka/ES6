// setTimeout(function(){ 
//     console.log('Yay!');
//  }, 1000);

var asyncCall =  new Promise((resolve, reject) => {
    // do something async 
    resolve();
 }).then(()=> {   
    console.log('Yay!');
 })