function sumArray(arr)
            {
                var sum=0;
                for(i=0;i<arr.length;i++){
                if(arr[i]%2!=0)
                sum=sum+arr[i];
                }
                return sum;
            }
            function oddsum(arr,callback){
                return (callback(arr));
            }
            var array1=[1,2,3,4,5,6];
            var res=oddsum(array1,sumArray);
            console.log("Sum of odd elements is:",res);