var noOfTickets=document.getElementById("noOfTickets");
var category=document.getElementById("category");
var costPerSeat;
if(category.equals("Balcony"))
costPerSeat=750;
else if(category.equals("Platinum"))
costPerSeat=500;
else if(category.equals("Gold"))
costPerSeat=450;
var bev=document.getElementById("beverages");
if(bev==true){
var totalCost= (noOfTickets*costPerSeat)+(noOfTickets*bev);
totalCost=Math.round(totalCost);
}
else
{
var totalCost= (noOfTickets*costPerSeat);
totalCost=Math.round(totalCost);
}
var res=document.getElementById("result");
var movie=document.getElementById("movie");
res.innerHTML="Ticket is booked successfully for movie "+movie+"You should pay Rs."+totalCost;


