function double(x){
    
        x*=2;
        return x;
}
var promise=new Promise(function(resolve,reject){
        
        setTimeout(function(){
            resolve(10);
        },2000);
     }) 
    
    promise.then(double).then(double).then(double).then((result)=>{
        console.log(result);
    })