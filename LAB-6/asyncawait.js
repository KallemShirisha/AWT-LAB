function getUser(userId){
    return new Promise((resolve,reject)=>{
       
        setTimeout(()=>{
            resolve({
                userId:userId,
                username:'co-admin'
            });
         },1000);
    })
}
function getService(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['Email','XYZ']);
             },2000);
            });
        }
function getServiceCost(services){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(services.length*100);
                     },2*1000);
                    });
}
 getUser(200).then(getService).then(getServiceCost).then(console.log);
async function getDetails(id){
    user=await getUser(id);
    service=await getService(user);
    cost=await getServiceCost(service);
    console.log("cost is "+cost);
}
getDetails(100);