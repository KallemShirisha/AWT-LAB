class Cardemo{
    constructor(brand,model){
         this.brand=brand;
         this.model=model;
         this.speed=0;
     }
     accelerate(acspeed){
         let val=this.speed+acspeed;
        this.speed=val;
     }
     break(decspeed){
         let vol=this.speed-decspeed;
         if(this.speed==0&&vol!=0)
         console.log("Your car is at rest,Donot apply brakes!!");
         else if(vol<0)
         console.log("Please dont decrease it may harm you!!");
         else
         this.speed=vol;
     }
     stop(){
         this.speed=0;
     }
     dispMotion(){
         if(this.speed==0)
             console.log("Your "+this.brand+" "+this.model+" is in Halting position");
       else
         console.log("Your "+this.brand+" "+this.model+" is  Running");
     }
 }
 let c1= new Cardemo("BMW",5000);
 c1.accelerate(100);
 c1.dispMotion();
 c1.break(78);
 c1.dispMotion();
 c1.stop();
 c1.dispMotion();
 c1.break(10000);
 c1.dispMotion();
 c1.accelerate(100);
 c1.break(10000);