class Tv{
  
    constructor(brand){
        this.brand=brand;
        this.volume=30;
        this.channel=1;
    }
  increaseVolume(inc){
        let val=inc+this.volume;
      if(val>100)
      console.log("It's harmfull to ur ears!!");
      else
      this.volume=val;
    }
    decreaseVolume(dec){
        let vol=this.volume-dec;
      if(vol<0)
      console.log("Can't decrease further!!");
      else
      this.volume=vol;
    }
   changeChannel(ch){
        this.channel=ch;
    }
    reset(){
        this.volume=30;
        this.channel=1;
    }
    dispStatus(){
        console.log("Your brand is "+this.brand+" with volume "+this.volume+" channel your watching is "+this.channel);
    }

}
let c1=new Tv("LG");
c1.increaseVolume(45);
c1.dispStatus();
c1.decreaseVolume(13);
c1.dispStatus();
c1.changeChannel(4);
c1.dispStatus();
c1.reset();
c1.dispStatus();
c1.increaseVolume(100);
c1.dispStatus();
c1.decreaseVolume(10000);
c1.dispStatus();