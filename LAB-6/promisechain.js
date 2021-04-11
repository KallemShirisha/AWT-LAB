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
    console.log(`get services of ${user.username} from API`);
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