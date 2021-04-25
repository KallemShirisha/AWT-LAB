function datedisplay(){
    const db=new Date();
    var day=db.getDate();
    var month=db.getMonth();
    month=month+1;
    var year=db.getFullYear();
    output=day+"/"+month+"/"+year;
    var time=db.getHours()+":"+db.getMinutes()+':'+db.getSeconds();
    
    return {output,time}
}


module.exports={datedisplay};
