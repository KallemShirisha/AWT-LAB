async function sumarr(arr){
    sum=0;
    for(i=0;i<arr.length;i++)
    sum=sum+arr[i];
    return sum;
}
var arr=[1,2,3,4];
res=sumarr(arr);
res.then((val)=>console.log(val))
.catch((err)=>
{
    console.log("Error");
})