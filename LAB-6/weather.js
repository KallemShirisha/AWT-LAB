function getPincode(code){
    console.log(code);
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve({
                code:code,
                pincode:'508'
            });
         },1000);
    })
}
function getCity(pincode){
  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                pincode:pincode,
                city:'Yadadri'
            });
             },2000);
            });
        }
function getTemp(city){
    
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(45);
                     },2*1000);
                    });
}
// getUser(200).then(getService).then(getServiceCost).then(console.log);
async function getWeather(code){
    pincode=await getPincode(code);
    city=await getCity(pincode);
    temp=await getTemp(city);
    console.log("Temp is "+temp);
}
getWeather('YDD');
